import TicketCard from "./components/TicketCard";

export default function Tiket() {
  return (
    <div className="bg-gray-200 relative flex flex-col">
      <div className="text-center">
        <h2 className="text-center font-bold text-5xl text-gray-900 p-12">
          Pilih Tiket
        </h2>
        <p className="font-medium text-gray-500 -mt-8">
          Pilih tiket yang kamu sebagai hadiah di hari spesial ini
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20 pt-20 pb-20 justify-center">
        <TicketCard
          title="Night ride kemana aja yang kamu mau"
          description="Bebas mau night ride kemana ajaa sampe menutup mata."
          image="/ara8.jpeg"
          whatsappLink="https://wa.me/6288901815948?text=Ariqq, aku mau night ride dongg"
        />
        <TicketCard
          title="Beli eskrim & duduk di pinggir kayutangan"
          description="Mau beli es krim di batu pun boleee"
          image="/ara9.jpeg"
          whatsappLink="https://wa.me/6288901815948?text=Ariqq, aku mau beli es krim"
        />
        <TicketCard
          title="Photobox seharian"
          description="Maraton photobox MOG, Robucca, Tikitaka, semua muanya"
          image="/ara10.jpeg"
          whatsappLink="https://wa.me/6288901815948?text=Ariqq, aku mau beli photobox sehariann"
        />
        <TicketCard
          title="Paket All in One"
          description="Sesuka kamu mau diapain ini anak 1"
          image="/ara7.jpeg"
          whatsappLink="https://wa.me/6288901815948?text=Ariqq, aku mau memperbudak kamu"
        />
      </div>
    </div>
  );
}
