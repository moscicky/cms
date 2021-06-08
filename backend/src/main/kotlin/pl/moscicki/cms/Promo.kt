package pl.moscicki.cms

import org.springframework.data.annotation.Id

data class Promo(
    @Id
    val id: String?,
    val code: String,
    val discount: Int
)