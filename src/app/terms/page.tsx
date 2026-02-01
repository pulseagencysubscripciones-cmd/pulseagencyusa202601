import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
    return (
        <main className="bg-[#070A14] min-h-screen text-white">
            <Navbar />
            <div className="mx-auto max-w-4xl px-6 py-20 md:py-32">
                <h1 className="text-4xl md:text-5xl font-black mb-4 text-violet-500 tracking-tighter uppercase">
                    Términos y Condiciones
                </h1>
                <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-12">
                    Vigencia desde: 01/2026
                </p>

                <div className="space-y-12 text-white leading-relaxed font-light md:text-lg">
                    <p>
                        Bienvenido a Pulse Agency. Al acceder a nuestro sitio web y utilizar nuestros servicios, aceptas cumplir con los siguientes Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, por favor no utilices nuestros servicios.
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">1. Servicios</h2>
                        <p>Pulse Agency ofrece servicios de consultoría de marca, estrategias de marketing y productos digitales (como "Pulse Visibility Sprint"). Nos reservamos el derecho de modificar o discontinuar cualquier servicio en cualquier momento.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">2. Propiedad Intelectual</h2>
                        <p>Todo el contenido, diseño, logotipos, y materiales proporcionados por Pulse Agency son propiedad intelectual nuestra o de nuestros licenciantes. No está permitido copiar, reproducir o distribuir nuestro contenido sin autorización expresa por escrito.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">3. Pagos y Reembolsos</h2>
                        <p>Los precios de nuestros servicios están indicados en el sitio web. Para productos digitales de bajo costo (como el Sprint de $27), debido a la naturaleza descargable e inmediata del contenido, las ventas son finales y no reembolsables salvo que se indique explícitamente una garantía específica.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">4. Limitación de Responsabilidad</h2>
                        <p>Pulse Agency no garantiza resultados específicos (como aumento de ventas o seguidores), ya que estos dependen de la ejecución del cliente y condiciones del mercado. En ningún caso seremos responsables por daños indirectos, incidentales o consecuentes derivados del uso de nuestros servicios.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">5. Conducta del Usuario</h2>
                        <p>Te comprometes a utilizar nuestros servicios de manera legal y ética. Nos reservamos el derecho de terminar el servicio a cualquier usuario que viole estos términos o actúe de manera perjudicial para nuestra agencia u otros clientes.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">6. Ley Aplicable</h2>
                        <p>Estos términos se rigen por las leyes del Estado de Wyoming, Estados Unidos. Cualquier disputa será resuelta en los tribunales competentes de dicha jurisdicción.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">7. Contacto</h2>
                        <p>Si tienes preguntas sobre estos Términos, por favor contáctanos en contacto@pulseagencyusa.com.</p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
