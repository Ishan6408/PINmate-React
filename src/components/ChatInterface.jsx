import { useState } from 'react';
import { Send, Paperclip, MoreVertical, Phone, Video, Search } from 'lucide-react';
import Navbar from './Navbar';

const ChatInterface = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, sender: "Alex Chen", text: "Hey everyone! Excited to start working on this.", time: "10:00 AM", isMe: false, avatar: "AC" },
        { id: 2, sender: "You", text: "Hi Alex! Same here. I've set up the repo.", time: "10:02 AM", isMe: true, avatar: "Me" },
        { id: 3, sender: "Sarah Jones", text: "Great! I'll start looking into the designs.", time: "10:05 AM", isMe: false, avatar: "SJ" },
    ]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            setMessages([...messages, {
                id: messages.length + 1,
                sender: "You",
                text: message,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                isMe: true,
                avatar: "Me"
            }]);
            setMessage('');
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />

            <div className="flex flex-1 max-w-7xl w-full mx-auto p-4 gap-4 overflow-hidden">
                {/* Sidebar - Members */}
                <div className="w-80 bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hidden md:flex flex-col overflow-hidden">
                    <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                        <h2 className="text-xl font-bold mb-4 dark:text-white">Team Members</h2>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search members..."
                                className="w-full bg-gray-50 dark:bg-gray-700 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/10 dark:text-white placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-2">
                        {['Alex Chen', 'Sarah Jones', 'You', 'Mike Ross'].map((member, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
                                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-sm font-bold text-gray-600 dark:text-gray-200">
                                    {member.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <p className="font-semibold text-sm dark:text-gray-200">{member}</p>
                                    <p className="text-xs text-green-500">Online</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col overflow-hidden">
                    {/* Chat Header */}
                    <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold">
                                HT
                            </div>
                            <div>
                                <h3 className="font-bold dark:text-white">Hackathon Team</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400">4 members • 2 online</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full transition-colors"><Phone size={20} className="text-gray-500 dark:text-gray-400" /></button>
                            <button className="p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full transition-colors"><Video size={20} className="text-gray-500 dark:text-gray-400" /></button>
                            <button className="p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full transition-colors"><MoreVertical size={20} className="text-gray-500 dark:text-gray-400" /></button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/50 dark:bg-gray-900/50">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex gap-3 ${msg.isMe ? 'flex-row-reverse' : ''}`}>
                                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-200 flex-shrink-0">
                                    {msg.avatar}
                                </div>
                                <div className={`max-w-[70%] ${msg.isMe ? 'items-end' : 'items-start'} flex flex-col`}>
                                    <div className={`p-4 rounded-2xl ${msg.isMe ? 'bg-black dark:bg-white text-white dark:text-black rounded-tr-none' : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-100 dark:border-gray-600 rounded-tl-none shadow-sm'}`}>
                                        <p className="text-sm">{msg.text}</p>
                                    </div>
                                    <span className="text-[10px] text-gray-400 mt-1 px-1">{msg.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
                        <form onSubmit={handleSendMessage} className="flex gap-2 items-end bg-gray-50 dark:bg-gray-700 p-2 rounded-2xl border border-gray-200 dark:border-gray-600 focus-within:ring-2 focus-within:ring-black/5 dark:focus-within:ring-white/10 transition-all">
                            <button type="button" className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full text-gray-500 dark:text-gray-400 transition-colors" title="Attach file">
                                <Paperclip size={20} />
                            </button>
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 bg-transparent border-none focus:ring-0 p-2 max-h-32 resize-none dark:text-white placeholder:text-gray-400"
                            />
                            <button
                                type="submit"
                                disabled={!message.trim()}
                                className="p-2 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;
