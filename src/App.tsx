import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Countdown from "./components/Countdown";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { Spotify } from "react-spotify-embed";
import Marquee from "react-fast-marquee";
import PaperContainer from "./PaperContainer";
import Tiket from "./Tiket";

gsap.registerPlugin(TextPlugin);

const App = () => {
  const comp = useRef<HTMLDivElement>(null);
  const [showSlider, setShowSlider] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const targetDate = new Date("2024-08-04T19:00:00");

  useLayoutEffect(() => {
    if (showSlider) {
      const ctx = gsap.context(() => {
        const t1 = gsap.timeline({
          onComplete: () => setShowWelcome(true),
        });
        t1.from("#intro-slider", {
          xPercent: -100,
          duration: 3,
          delay: 0.3,
        })
          .to(["#hero-image", "#title-1", "#title-2", "#title-3"], {
            opacity: 1,
            y: "+=30",
            stagger: 0.5,
            duration: 0.5,
          })
          .to(["#hero-image", "#title-1", "#title-2", "#title-3"], {
            opacity: 0,
            y: "-=30",
            delay: 4,
            stagger: 0.5,
            duration: 1,
          })
          .to("#intro-slider", {
            xPercent: -200,
            duration: 1.3,
          })
          .from("#welcome", {
            opacity: 0,
            duration: 0.5,
          })
          .from("#image-marquee", {
            opacity: 0,
            duration: 0.5,
          })
          .to("#text1", {
            text: {
              value:
                "Depok, 17 Juli 2024. Surat digital ini ditulis untuk Ara saat dia lagi perang-perangan :P",
            },
            duration: 4,
            delay: 0.5,
            ease: "none",
          })
          .to("#text2", {
            text: {
              value:
                "Hai araaa, mungkin ini pertama kali aku nulis surat buat orang jadinya maaf kalo masih belom terstruktur yaa. First of all happy birthday to youu dan juga tepat setahun kita pertama kali ketemu di Mixue tahun laluuu, semoga di umur kamu yang ke 21 ini bakal menjadi umur terbahagia kamu dan menjadi Ara dengan versi terbaiknyaa. Semoga nilai kamu memuaskan dan rencana kamu untuk ikut MBKM di PKT dan bisa selesaiin proyek buat skripsi kamu di tahun depan dapat berjalan dengan lancar, terus juga ibadahnya bisa lebih kuat, makin sayang sama orang tua apalagi sama Bapak yang sayang banget sama kamuu, terus akur-akur juga sama adik kakak kamuu. Semoga semua yang kamu harapkan dan cita-citakan dapat terkabul, aamiin!!!",
            },
            duration: 8,
            delay: 0.5,
            ease: "none",
          })
          .to("#text3", {
            text: {
              value:
                "Araa, terima kasih yaa selama kita LDR 6 bulan ini kamu benar-benar suportif dan benar-benar bisa menahan ego kamu terhadap kelakuanku yang sering banget bikin kesalahan yang berulang-ulang selama kita berhubungan jarak jauh inii. Aku mau minta maaf atas tindakan aku yang pasti sering bikin kamu betebdan sering ga merhatiin kamu selama magang kemarinn. Kamu bener-bener jadi perempuan yang bikin aku amaze dari pertama kali kita ketemu sampai sekarang. Prinsip hidup, kedewasaan, kesabaran, dan keteguhan kamu bener-bener hal yang membuat aku selalu amaze ke kamu dari awal pertemuan kita sampai sekarang. Selain itu, kamu tuh CANTIK BANGET HAHAHAHA. Banyak banget anjay yang muji kamu dari om-tante, keluarga, temen-temen yang muji kamu dan aku bener-bener pertama kali ngerasain mau flexing tiap hariii. Makanya aku gada rasa terpaksa kalo ngepost kamu kann, padahal dulu skeptis sama orang yang kayak begitu HAHAHA.",
            },
            duration: 8,
            delay: 0.5,
            ease: "none",
          })
          .to("#text4", {
            text: {
              value:
                "Araa, kamu kalo ada mau yang diceritain dan perlu dibantu tolong bilang ajaa. Jangan mikirin kondisi aku saat ini jadinya kamu masih menahan diri. Kamu udah banyak bantu aku, jadi sekarang giliran aku bantu kamuu. Lalu mohon maaf semisal di tanggal 9 ini aku belom ada di samping kamu. Aku bakal sebisa mungkin usaha di tanggal 9 ada di sana ngerayain ulang tahun kamu. Tapi kalo aku belom bisa, aku udah nyiapin berbagai hal untuk kamundan nanti aku tetep usahain di bulan Agustus ini bakal ngerayain ulang tahun bareng sama kamuu. Doain aku dapat rejeki lebih buat kesana yaaa.<br><br> Abis ini slide ke bawah yaaa",
            },
            duration: 8,
            delay: 0.5,
            ease: "none",
          });
      }, comp);

      return () => ctx.revert();
    }
  }, [showSlider]);

  return (
    <div className="relative" ref={comp}>
      {!showSlider && (
        <Countdown targetDate={targetDate} onEnd={() => setShowSlider(true)} />
      )}
      {showSlider && (
        <>
          <div
            id="intro-slider"
            className="h-screen bg-gray-200 text-black absolute top-0 left-0 z-10 px-4 py-8 md:px-24 w-full flex flex-col md:flex-row gap-10 tracking-tight justify-between place-items-center"
          >
            <Fireworks autorun={{ speed: 1 }}></Fireworks>
            <div className="flex flex-col">
              <h1
                id="title-1"
                className="text-5xl md:text-7xl text-center md:text-start font-bold opacity-0"
              >
                Happy Birthday
              </h1>
              <h1
                id="title-2"
                className="text-5xl md:text-7xl text-center md:text-start font-bold opacity-0"
              >
                Ara!
              </h1>
              <p
                id="title-3"
                className="text-md md:text-lg font-semibold text-center md:text-start mt-4 w-full md:w-9/12 opacity-0"
              >
                Cieee yang udah 21 tahun, May Allah bless you with happiness and
                good health! Ditonton terus yaa!
              </p>
            </div>
            <div
              id="hero-image"
              className="max-w-96 border-gray-200 border shadow-2xl rounded-xl opacity-0"
            >
              <img
                id="img1"
                src="/ara1.jpeg"
                className="h-96 md:h-[480px] object-cover rounded-xl"
                alt="Ara"
              />
            </div>
          </div>
          <div className="h-[120vh] md:h-screen w-screen px-4 py-8 md:px-24 flex flex-col md:flex-row bg-gray-950 justify-between place-items-center">
            <div className="flex flex-col w-full md:w-3/5">
              <p
                id="text1"
                className="text-sm md:text-sm lg:text-md text-gray-200 font-sans font-semibold"
              ></p>
              <p
                id="text2"
                className="text-[11px] md:text-xs lg:text-sm text-gray-200 font-sans font-semibold mt-4 text-justify"
              ></p>
              <p
                id="text3"
                className="text-[11px] md:text-xs  lg:text-sm text-gray-200 font-sans font-semibold mt-4 text-justify"
              ></p>
              <p
                id="text4"
                className="text-[11px] md:text-xs  lg:text-sm text-gray-200 font-sans font-semibold mt-4 text-justify"
              ></p>
            </div>
            <div
              id="image-marquee"
              className="w-full md:w-2/5 md:pl-8 py-8 flex flex-col"
            >
              <Marquee direction="right" autoFill className="">
                <img
                  src="/ara3.jpeg"
                  className="h-32 md:h-[480px] mx-10 shadow-lg shadow-gray-500 rounded-xl"
                />
                <img
                  src="/ara2.jpeg"
                  className="h-32 md:h-[480px] mx-10 shadow-lg shadow-gray-500 rounded-xl"
                />
                <img
                  src="/ara6.jpeg"
                  className="h-32 md:h-[480px] shadow-lg shadow-gray-500 mx-10 rounded-xl"
                />
                <img
                  src="/ara4.jpeg"
                  className="h-32 md:h-[480px]  shadow-lg shadow-gray-500 mx-10 rounded-xl"
                />
              </Marquee>
              <Spotify
                link="https://open.spotify.com/track/6VgyRGeR4cw6yNGazjGFhu?si=613453e333614fbb"
                wide
                className="mt-4"
                oncallb
              ></Spotify>
            </div>
          </div>
          {showWelcome && (
            <>
              <PaperContainer />
              <Tiket />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;
