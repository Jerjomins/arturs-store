import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold text-black mb-8">Par Mums</h1>
                <p className="text-xl text-gray-700 mb-6">
                    Mēs esam Arturs Store, vieta, kur varat atrast ekskluzīvus produktus, kas veidoti ar rūpību un aizrautību. Mūsu mērķis ir piedāvāt jums visaugstāko kvalitāti un vislabāko pirkšanas pieredzi.
                </p>
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Mūsu Misija</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Mūsu misija ir sniegt mūsu klientiem visaugstāko kvalitāti un unikālus produktus, kas uzlabo viņu ikdienas dzīvi. Mēs cenšamies būt uzticams partneris, piedāvājot inovācijas un pieejamību ikvienam.
                </p>

                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Mūsu Vērtības</h2>
                <ul className="text-lg text-gray-600 list-inside list-disc mb-8">
                    <li>Inovācija: Mēs pastāvīgi meklējam jaunus veidus, kā uzlabot mūsu piedāvājumus.</li>
                    <li>Uzticamība: Mēs ticam ilgtspējīgām attiecībām ar mūsu klientiem un partneriem.</li>
                    <li>Klientu apmierinātība: Mēs vienmēr esam šeit, lai palīdzētu un atbalstītu savus klientus.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Mūsu Komanda</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img
                            src="/members/member.jpg"
                            alt="Team Member 1"
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <h3 className="text-xl font-semibold text-black mt-4">Arturs Krūmiņš</h3>
                        <p className="text-gray-600">Dibinātājs un izpilddirektors</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img
                            src="/members/member.jpg"
                            alt="Team Member 2"
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <h3 className="text-xl font-semibold text-black mt-4">Linda Meikša</h3>
                        <p className="text-gray-600">Pārdošanas vadītāja</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img
                            src="/members/member.jpg"
                            alt="Team Member 3"
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <h3 className="text-xl font-semibold text-black mt-4">Jānis Bērziņš</h3>
                        <p className="text-gray-600">Mārketinga speciālists</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
