package pl.moscicki.shop

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource
import org.springframework.web.bind.annotation.*

@RepositoryRestResource(
    path = "promo",
    collectionResourceRel = "promo",
)
@CrossOrigin
interface PromoCodeRepository : MongoRepository<Promo, String>

@RestController
@RequestMapping("/promos")
@CrossOrigin
class PromoEndpoint(val promoCodeRepository: PromoCodeRepository) {

    @CrossOrigin
    @PostMapping
    fun createPromo(@RequestBody promo: Promo): PromoResponse {
        promoCodeRepository.save(promo)
        return PromoResponse("Utworzono kod: ${promo.code}")
    }
}

data class PromoResponse(val message: String)