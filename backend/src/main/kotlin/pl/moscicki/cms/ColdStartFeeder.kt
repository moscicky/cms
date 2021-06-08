package pl.moscicki.cms

import org.springframework.boot.CommandLineRunner
import org.springframework.stereotype.Component

@Component
class ColdStartFeeder(val productRepository: ProductRepository): CommandLineRunner {
    override fun run(vararg args: String?) {
        val products = listOf(
            Product(
                id = null,
                name = "iphone 11",
                description = "Nowy system dwóch aparatów, w tym jeden z obiektywem ultraszerokokątnym. Tryb nocny i zdumiewająca jakość wideo. Odporność na wodę i pył. Jeszcze wydajniejsza bateria na cały dzień. I sześć pięknych kolorów. Oto iPhone podkręcony do 11.",
                imageUrl = "https://stat-m8.ms-online.pl/media/cache/gallery/rc/sgxcvcsz/images/20/20982476/apple-iphone-11-czarny-1.jpg",
                stock = 10,
                price = 3999.0f
            ),
            Product(
                id = null,
                name = "ekspres delonghi",
                description = "Prawdziwe włoskie espresso czy pyszne latte macchiato? Dinamica przygotuje dla ciebie kawę według 12 przepisów. Od wyśmienitej kawy dzieli cię moment: wybierz rodzaj lub skorzystaj z menu napojów na nowym i intuicyjnym wyświetlaczu LCD.",
                imageUrl = "https://www.mediaexpert.pl/media/cache/gallery/product/2/50/593/772/ly4ldid9/images/86/869058/Ekspres-DELONGHI-Dinamica-ECAM-35075S-front1-wer1.jpg",
                stock = 5,
                price = 2230.0f
            ),
            Product(
                id = null,
                name = "zmywarki whirpool",
                description = "Zmywarka posiada dodatkowy, trzeci poziom załadunku przeznaczony na sztućce. Jest to szuflada, w której umieścisz nie tylko sztućce, ale również drobne naczynia kuchenne - spodki, łopatki czy mieszadła od miksera. Samo wkładanie i wyjmowanie sztućców jest niezwykle wygodne.",
                imageUrl = "https://f00.esfr.pl/foto/7/72207318729/6e3611c5fec31e62e4de208441b85954/whirlpool-wfo-3t133-p-6-5-x,72207318729_8.jpg",
                stock = 100,
                price = 6750.0f
            )
        )
        if (productRepository.count() == 0L) {
            productRepository.saveAll(products)
        }
    }
}