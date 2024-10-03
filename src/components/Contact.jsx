import FormContact from "./form/FormContact";
import InfoContact from "./form/InfoContact";

function Contact() {
  return (
    
    <aside className="bg-black py-10">
      <section className="max-w-6xl m-auto p-5 lg:p-0">
        <header className="relative w-fit md:text-3xl tracking-wide space-y-2">
          <div className="border-t-[3px] border-yellow w-[65%] pb-2"></div>
          <p className="text-white font-normal">CONTÁCTANOS</p>
        </header>
        <div className="flex flex-col sm:flex-row gap-10">
          <FormContact />
          <InfoContact />
        </div>
      </section>
    </aside>
  );
}

export default Contact;
