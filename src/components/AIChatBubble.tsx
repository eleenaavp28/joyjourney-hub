import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ProductCard {
  name: string;
  price: string;
  gender: "women" | "men";
}

interface EventBadge {
  name: string;
}

const SUGGESTION_CHIPS = [
  "What should I wear for a trail run?",
  "I have a race this weekend",
  "Cold morning run outfit",
  "I have these clothes, what event fits?",
];

const WOMEN_PRODUCTS = ["High-Rise Run Tight", "Trail Bra Pro", "Wind Shell Jacket", "Seamless Long Sleeve"];
const MEN_PRODUCTS = ["Run Pace Short", "Trail Run Tee", "Wind Vest", "Compression Tight"];
const EVENTS = ["Trail run", "10K race", "Running club session", "Cold morning run", "Gym training", "Race day"];

function extractProducts(text: string): ProductCard[] {
  const products: ProductCard[] = [];
  const allProducts: { name: string; price: string; gender: "women" | "men" }[] = [
    { name: "High-Rise Run Tight", price: "€89", gender: "women" },
    { name: "Trail Bra Pro", price: "€65", gender: "women" },
    { name: "Wind Shell Jacket", price: "€145", gender: "women" },
    { name: "Seamless Long Sleeve", price: "€72", gender: "women" },
    { name: "Run Pace Short", price: "€75", gender: "men" },
    { name: "Trail Run Tee", price: "€68", gender: "men" },
    { name: "Wind Vest", price: "€120", gender: "men" },
    { name: "Compression Tight", price: "€85", gender: "men" },
  ];
  for (const p of allProducts) {
    if (text.toLowerCase().includes(p.name.toLowerCase())) {
      products.push(p);
    }
  }
  return products;
}

function extractEvents(text: string): EventBadge[] {
  const events: EventBadge[] = [];
  for (const e of EVENTS) {
    if (text.toLowerCase().includes(e.toLowerCase())) {
      events.push({ name: e });
    }
  }
  return events;
}

const AIChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && popupRef.current && !popupRef.current.contains(e.target as Node)) {
        const bubble = document.getElementById("ai-chat-bubble");
        if (bubble && !bubble.contains(e.target as Node)) {
          setIsOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;
    setShowNotification(false);
    const userMsg: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("style-advisor", {
        body: { messages: newMessages.map((m) => ({ role: m.role, content: m.content })) },
      });

      if (error) throw error;

      const aiContent = data?.content || "Sorry, I couldn't process that. Try again!";
      setMessages((prev) => [...prev, { role: "assistant", content: aiContent }]);
    } catch (err) {
      console.error("AI error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Oops, something went wrong. Please try again! GET YOUR HIGH." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Bubble */}
      <button
        id="ai-chat-bubble"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowNotification(false);
        }}
        className="fixed bottom-6 right-6 z-[9999] w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        style={{ background: "linear-gradient(90deg, #FF8C6B, #7B93F5)" }}
      >
        <span className="text-white text-2xl font-bold">✦</span>
        {showNotification && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        )}
        <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: "linear-gradient(90deg, #FF8C6B, #7B93F5)" }} />
      </button>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-[90px] right-6 z-[9999] w-[360px] max-w-[90vw] h-[480px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 shrink-0"
              style={{ background: "linear-gradient(90deg, #FF8C6B, #7B93F5)" }}
            >
              <span className="text-white font-mono text-xs tracking-[0.2em] font-bold">BB STYLE ADVISOR</span>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.length === 0 && !isLoading && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-400 text-center mb-3">Hey! Ask me about style 👇</p>
                  {SUGGESTION_CHIPS.map((chip) => (
                    <button
                      key={chip}
                      onClick={() => sendMessage(chip)}
                      className="block w-full text-left text-xs px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              )}

              {messages.map((msg, i) => {
                const products = msg.role === "assistant" ? extractProducts(msg.content) : [];
                const events = msg.role === "assistant" ? extractEvents(msg.content) : [];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start gap-2"}`}
                  >
                    {msg.role === "assistant" && (
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-1"
                        style={{ background: "#FF8C6B" }}
                      >
                        <span className="text-white text-[10px] font-bold">BB</span>
                      </div>
                    )}
                    <div className="flex flex-col max-w-[80%]">
                      <div
                        className="px-3 py-2 rounded-xl text-xs leading-relaxed"
                        style={{
                          background: msg.role === "user" ? "#FFE8DF" : "#F5F5F5",
                          color: "#2A2522",
                        }}
                      >
                        {msg.content}
                      </div>
                      {products.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {products.map((p) => (
                            <span
                              key={p.name}
                              className="text-[10px] px-2 py-1 rounded-full text-white font-medium"
                              style={{ background: p.gender === "women" ? "#FF8C6B" : "#7B93F5" }}
                            >
                              {p.name} · {p.price}
                            </span>
                          ))}
                        </div>
                      )}
                      {events.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {events.map((e) => (
                            <span
                              key={e.name}
                              className="text-[10px] px-2 py-1 rounded-full bg-gray-200 text-gray-700 font-medium"
                            >
                              📍 {e.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}

              {isLoading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: "#FF8C6B" }}>
                    <span className="text-white text-[10px] font-bold">BB</span>
                  </div>
                  <div className="flex gap-1 px-3 py-2 bg-gray-100 rounded-xl">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </motion.div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="px-3 py-2 border-t border-gray-100 shrink-0 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="Ask about style..."
                className="flex-1 text-xs px-3 py-2 rounded-lg bg-gray-50 border-none outline-none text-gray-800 placeholder:text-gray-400"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={isLoading || !input.trim()}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white disabled:opacity-40 transition-opacity"
                style={{ background: "#FF8C6B" }}
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatBubble;
