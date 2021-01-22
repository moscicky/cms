package pl.moscicki.cms

import org.springframework.data.annotation.Id

data class Contact(
    @Id
    val id: String?,
    val email: String,
    val message: String?,
)