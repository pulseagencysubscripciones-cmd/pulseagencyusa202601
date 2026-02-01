import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <main className="bg-[#070A14] min-h-screen text-white">
            <Navbar />
            <div className="mx-auto max-w-4xl px-6 py-20 md:py-32">
                <h1 className="text-4xl md:text-5xl font-black mb-4 text-violet-500 tracking-tighter uppercase">
                    Política de Privacidad
                </h1>
                <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-12">
                    ÚLTIMA ACTUALIZACIÓN: 01/2026
                </p>

                <div className="space-y-12 text-white leading-relaxed font-light md:text-lg">
                    <p>
                        En Pulse Agency, la privacidad de nuestros usuarios y clientes es una prioridad. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos tu información personal cuando visitas nuestro sitio web o utilizas nuestros servicios.
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">1. Información que Recopilamos</h2>
                        <p className="mb-4">Podemos recopilar información personal que tú nos proporcionas voluntariamente al:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Registrarte en nuestros servicios o newsletters.</li>
                            <li>Completar formularios de contacto o encuestas.</li>
                            <li>Realizar una compra o transacción.</li>
                        </ul>
                        <p className="mt-4">La información puede incluir, entre otros datos: nombre, dirección de correo electrónico, número de teléfono, información de facturación (procesada por terceros seguros como Stripe) y detalles de tu negocio.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">2. Uso de la Información</h2>
                        <p className="mb-4">Utilizamos la información recopilada para:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Proveer y mejorar nuestros servicios de consultoría y marketing.</li>
                            <li>Procesar transacciones y enviar notificaciones relacionadas.</li>
                            <li>Enviar comunicaciones de marketing (puedes optar por no recibirlas en cualquier momento).</li>
                            <li>Analizar el uso del sitio para mejorar la experiencia del usuario.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">3. Protección de Datos</h2>
                        <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ninguna transmisión por internet es 100% segura.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">4. Compartir Información con Terceros</h2>
                        <p>No vendemos ni alquilamos tu información personal. Podemos compartir datos con proveedores de servicios de confianza (ej. procesadores de pago, herramientas de email marketing) que nos ayudan a operar nuestro negocio, siempre bajo acuerdos de confidencialidad.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">5. Cookies y Tecnologías de Rastreo</h2>
                        <p>Utilizamos cookies y tecnologías similares para mejorar la funcionalidad del sitio y analizar el tráfico. Puedes configurar tu navegador para rechazar cookies, aunque esto podría afectar algunas funciones del sitio.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">6. Tus Derechos</h2>
                        <p>Tienes derecho a acceder, corregir o solicitar la eliminación de tu información personal. Para ejercer estos derechos, contáctanos en contacto@pulseagencyusa.com.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">7. Cambios en esta Política</h2>
                        <p>Nos reservamos el derecho de actualizar esta política en cualquier momento. Te notificaremos sobre cambios significativos a través de nuestro sitio web o por correo electrónico.</p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
