"use client";

import { useState, useEffect } from "react";
import { collection, onSnapshot, addDoc, serverTimestamp, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface Note {
  id?: string;
  text: string;
  author: "Murat" | "Zeynep";
  createdAt: any;
}

export default function NotesSection() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newNoteText, setNewNoteText] = useState("");
  const [author, setAuthor] = useState<"Murat" | "Zeynep">("Murat");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only query if we have a Firebase Project ID set (to not crash if empty)
    if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
      setIsLoading(false);
      return;
    }

    const q = query(collection(db, "notes"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: Note[] = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() } as Note);
      });
      setNotes(data);
      setIsLoading(false);
    }, (error) => {
      console.error("Error fetching notes:", error);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteText.trim()) return;

    if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
      alert("Lütfen önce Firebase ayarlarını .env.local içine yapın.");
      return;
    }

    try {
      await addDoc(collection(db, "notes"), {
        text: newNoteText.trim(),
        author: author,
        createdAt: serverTimestamp(),
      });
      setNewNoteText("");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Not eklenemedi: ", error);
      alert("Not eklenemedi, konsolu kontrol edin.");
    }
  };

  const handleDeleteNote = async (id?: string) => {
    if (!id) return;
    if (!confirm("Bu notu silmek istediğine emin misin?")) return;
    try {
      await deleteDoc(doc(db, "notes", id));
    } catch (error) {
      console.error("Not silinemedi: ", error);
      alert("Not silinemedi, konsolu kontrol edin.");
    }
  };

  return (
    <section id="notes" className="py-16 md:py-24 bg-[#f3ede4] px-5">
      <div className="max-w-7xl mx-auto px-2 md:px-6">
        <div className="bg-[#ede7df] p-8 md:p-20 rounded-[2rem] md:rounded-[4rem] relative overflow-hidden">
          {/* Background Pattern for the "Corkboard/Table" feel */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ backgroundImage: "radial-gradient(#901448 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }}
          ></div>
          
          <div className="text-center mb-16 space-y-4 relative z-10">
            <h2 className="font-[var(--font-noto-serif)] text-4xl mt-4 md:text-5xl text-[#901448] italic font-bold">
              Küçük Notlarımız
            </h2>
            <p className="text-[#574146] text-sm md:text-base max-w-md mx-auto">
              İstediğimiz zaman birbirimize bırakabileceğimiz minik notlar...
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
            {isLoading ? (
              <p className="col-span-full text-center text-[#901448] font-medium">Notlar yükleniyor...</p>
            ) : (
              notes.map((note, index) => {
                const isMurat = note.author === "Murat";
                const rotateClasses = ["-rotate-3 hover:rotate-0", "rotate-2 hover:rotate-0", "-rotate-2 hover:rotate-0", "rotate-3 hover:rotate-0"];
                const rotation = rotateClasses[index % rotateClasses.length];
                
                return (
                  <div 
                    key={note.id} 
                    className={`p-8 shadow-lg transform ${rotation} transition-transform duration-300 min-h-[250px] flex flex-col justify-between ${isMurat ? 'bg-white' : 'bg-[#ffd9e4]'}`}
                  >
                    <div className="w-8 h-8 absolute -top-4 left-1/2 -translate-x-1/2 bg-[#901448]/10 rounded-full flex items-center justify-center shadow-inner">
                      <span className="material-symbols-outlined text-sm text-[#901448]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        push_pin
                      </span>
                    </div>
                    <p className={`font-[var(--font-noto-serif)] italic text-lg leading-relaxed mt-2 ${isMurat ? 'text-[#1d1b16]' : 'text-[#330f1f]'}`}>
                      "{note.text}"
                    </p>
                    <div className={`flex justify-between items-center text-right border-t pt-4 mt-6 ${isMurat ? 'border-[#ddbfc5]' : 'border-[#65394b]/20'}`}>
                      <button 
                        onClick={() => handleDeleteNote(note.id)}
                        className={`hover:scale-125 transition-transform ${isMurat ? 'text-[#ddbfc5] hover:text-[#901448]' : 'text-[#65394b]/40 hover:text-[#65394b]'}`}
                        title="Notu Sil"
                      >
                         <span className="material-symbols-outlined text-[18px]">close</span>
                      </button>
                      <p className={`text-xs font-bold tracking-widest uppercase ${isMurat ? 'text-[#805062]' : 'text-[#65394b]'}`}>
                        — {note.author.toUpperCase()}
                      </p>
                    </div>
                  </div>
                );
              })
            )}

            {/* Yeni Not Ekleme Butonu */}
            <div 
              onClick={() => setIsModalOpen(true)}
              className="bg-white/50 backdrop-blur-sm p-8 border-2 border-dashed border-[#ddbfc5] shadow-sm transform -rotate-1 hover:rotate-0 hover:-translate-y-2 hover:shadow-md hover:bg-white/80 transition-all duration-300 min-h-[250px] flex flex-col items-center justify-center group cursor-pointer"
            >
              <span className="material-symbols-outlined text-4xl text-[#8a7176] mb-4 group-hover:scale-110 group-hover:text-[#901448] transition-all">
                add_circle
              </span>
              <p className="text-sm font-bold text-[#8a7176] group-hover:text-[#901448] tracking-widest uppercase transition-colors">
                Yeni Not Ekle
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Not Ekleme Modalı */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-[#8a7176] hover:text-[#901448] transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="font-[var(--font-noto-serif)] text-2xl text-[#901448] font-bold mb-6 italic">Yenİ Bİr Not</h3>
            
            <form onSubmit={handleAddNote} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-[#805062] uppercase tracking-widest mb-3">Kim Yazıyor?</label>
                <div className="flex gap-4">
                  <label className={`flex-1 py-3 text-center rounded-xl cursor-pointer border-2 transition-all font-medium ${author === 'Murat' ? 'border-[#901448] bg-[#fff9f0] text-[#901448]' : 'border-[#ddbfc5] text-[#8a7176] hover:bg-[#f9f3ea]'}`}>
                    <input type="radio" name="author" value="Murat" className="hidden" checked={author === 'Murat'} onChange={() => setAuthor('Murat')} />
                    Murat
                  </label>
                  <label className={`flex-1 py-3 text-center rounded-xl cursor-pointer border-2 transition-all font-medium ${author === 'Zeynep' ? 'border-[#901448] bg-[#ffd9e4] text-[#901448]' : 'border-[#ddbfc5] text-[#8a7176] hover:bg-[#f9f3ea]'}`}>
                    <input type="radio" name="author" value="Zeynep" className="hidden" checked={author === 'Zeynep'} onChange={() => setAuthor('Zeynep')} />
                    Zeynep
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#805062] uppercase tracking-widest mb-3">Notun:</label>
                <textarea 
                  required
                  rows={4}
                  value={newNoteText}
                  onChange={(e) => setNewNoteText(e.target.value)}
                  placeholder="Seni düşünüyordum..."
                  className="w-full bg-[#f9f3ea] border border-[#ddbfc5] rounded-xl p-4 focus:outline-none focus:border-[#901448] focus:ring-1 focus:ring-[#901448] transition-all resize-none text-[#1d1b16]"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-[#901448] text-white rounded-xl font-semibold hover:bg-[#b03060] transition-colors shadow-lg hover:shadow-xl"
              >
                Pano Üzerine İğnele
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
