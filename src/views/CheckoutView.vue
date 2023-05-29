<script setup>
import InputGroup from '../components/InputGroup.vue';


import { computed, reactive } from 'vue';

import useValidate from '@vuelidate/core'
import { required, email, minLength, alpha } from '@vuelidate/validators'



const cartState = reactive({ quantity: 1 })

const cart = {
    name: 'Camiseta Chicorei',
    image: 'https://chicorei.imgix.net/49528/701f48d3-dfb0-11ed-98d9-771d50299ea6.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top',
    price: 79,
    quantity: cartState.quantity
}

const incrementQuantity = () => {
    formData.carrinho.quantidade++
}
const decrementQuantity = () => {
    if (formData.carrinho.quantidade > 1) {

        formData.carrinho.quantidade--
    }
}

const formData = reactive({
    contato: {
        email: '',
        telefone: '',
    },
    endereco: {
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: ''
    },
    cartao: {
        numero: '',
        titular: '',
        dataVencimento: '',
        cvc: ''
    },
    carrinho: {
        quantidade: 1
    }
})

const rules = computed(() => {
    return {
        contato: {
            email: { required, email },
            telefone: { required, minLength: minLength(16) },
        },
        endereco: {
            cep: { required, minLength: minLength(9) },
            rua: { required },
            numero: { required },
            bairro: { required },
            cidade: { required },
            estado: { required, alpha }
        },
        cartao: {
            numero: { required, minLength: minLength(19) },
            titular: { required },
            dataVencimento: { required, minLength: minLength(7) },
            cvc: { required, minLength: minLength(3) }
        }
    }
})


const v$ = useValidate(rules, formData)

const finalOrder = reactive({
    produto: {
        nome: cart.name,
        preco: cart.price,
    },
    informações: formData
})




const submitForm = async () => {
    const result = await v$.value.$validate();
    if (result) {
        alert("Compra realizada")
        console.log(finalOrder)
    } else {
        console.log(v$)
    }
}

</script>

<template>
    <main>
        <form @submit.prevent="submitForm">
            <div>
                <h1>Finalização do pedido</h1>
                <div class="inputs">
                    <h2>Informações de contato</h2>
                    <InputGroup formlabel='E-mail' v-model="formData.contato.email" />
                    <span class="error-message" v-for="error in v$.contato.email.$errors">{{ error.$message }}</span>

                    <InputGroup formlabel='Telefone' mask="(##) # ####-####" v-model="formData.contato.telefone" />
                    <span class="error-message" v-for="error in v$.contato.telefone.$errors">{{ error.$message }}</span>
                </div>

                <div class="inputs">
                    <h2>Informações de endereço</h2>
                    <InputGroup formlabel='CEP' tipo='text' mask="#####-###" v-model="formData.endereco.cep" />
                    <span class="error-message" v-for="error in v$.endereco.cep.$errors">{{ error.$message }}</span>
                    <InputGroup formlabel='Rua' tipo='text' v-model="formData.endereco.rua" />
                    <span class="error-message" v-for="error in v$.endereco.rua.$errors">{{ error.$message }}</span>
                    <section class="section-1">
                        <div>
                            <InputGroup formlabel='Número' v-model="formData.endereco.numero" />
                            <span class="error-message" v-for="error in v$.endereco.numero.$errors">{{ error.$message
                            }}</span>
                        </div>
                        <div>
                            <InputGroup formlabel='Bairro' tipo='text' v-model="formData.endereco.bairro" />
                            <span class="error-message" v-for="error in v$.endereco.bairro.$errors">{{ error.$message
                            }}</span>
                        </div>
                    </section>
                    <section class="section-2">
                        <div>
                            <InputGroup formlabel='Cidade' tipo='text' v-model="formData.endereco.cidade" />
                            <span class="error-message" v-for="error in v$.endereco.cidade.$errors">{{ error.$message
                            }}</span>
                        </div>
                        <div>
                            <InputGroup formlabel='Estado' mask="@@" tipo='text' v-model="formData.endereco.estado" />
                            <span class="error-message" v-for="error in v$.endereco.estado.$errors">{{ error.$message
                            }}</span>
                        </div>
                    </section>
                </div>
                <div class="inputs">
                    <h2>Informações de pagamento</h2>
                    <InputGroup formlabel='Número do cartão' tipo='text' mask="#### #### #### ####"
                        v-model="formData.cartao.numero" />
                    <span class="error-message" v-for="error in v$.cartao.numero.$errors">{{ error.$message }}</span>
                    <InputGroup formlabel='Titular do cartão' tipo='text' v-model="formData.cartao.titular" />
                    <span class="error-message" v-for="error in v$.cartao.titular.$errors">{{ error.$message }}</span>
                    <section class="section-2">
                        <div>
                            <InputGroup formlabel='Data de vencimento' tipo='text' mask="##/####"
                                v-model="formData.cartao.dataVencimento" />
                            <span class="error-message" v-for="error in v$.cartao.dataVencimento.$errors">{{ error.$message
                            }}</span>
                        </div>
                        <div>
                            <InputGroup formlabel='CVC' tipo='text' mask="###" v-model="formData.cartao.cvc" />
                            <span class="error-message" v-for="error in v$.cartao.cvc.$errors">{{ error.$message }}</span>
                        </div>
                    </section>
                </div>
            </div>
            <div class="aside-container">
                <div class="container">
                    <h1>Carrinho de compras</h1>
                    <div class="carrinho">
                        <img :src="cart.image" class="imagem-carrinho" />
                        <div class="aside-cart">
                            <div>

                                <p>{{ cart.name }}</p>
                                <h2>R$ {{ cart.price }}</h2>
                            </div>
                            <div class="quant-control">
                                <button type="button" class="quant-btn" @click="decrementQuantity">-</button>
                                <InputGroup class="quantity" v-model="formData.carrinho.quantidade" />
                                <button type="button" class="quant-btn" @click="incrementQuantity">+</button>
                            </div>
                            <span class="total-span">Total: R$ {{ formData.carrinho.quantidade * cart.price }}</span>
                        </div>
                    </div>
                </div>

                <button class="submit-button" type="submit">Confirmar compra</button>
            </div>
        </form>
    </main>
</template>

<style  scoped>
main {
    width: 1024px;
    display: flex;
    justify-content: space-between;
    margin-top: 150px;
}

.inputs {
    margin-bottom: 2rem;
}

form {

    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
}

section {
    display: grid;
    column-gap: 0.5rem;
}

.section-2 {
    grid-template-columns: 2fr 1fr;
}

.section-1 {
    grid-template-columns: 1fr 2fr;
}

.aside-container {
    display: flex;
    flex-direction: column;
}

.error-message {
    color: red;

}

.container {
    width: 360px;
    height: 260px;
    background-color: rgb(243, 243, 243);
    display: flex;
    flex-direction: column;
    padding: 1rem
}

.carrinho {
    display: flex;
    align-items: center;
}

.aside-cart {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.imagem-carrinho {
    width: 30%;
    height: fit-content;
    margin-right: 1rem;

}

h1 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
}

.total-span {
    font-weight: 500;
}

.quant-control {
    display: flex;
    height: 2.6rem;
}

.quant-btn {
    padding: 0 1rem;
    background-color: #7a8e9c;
    color: #fff;
}

.quantity {
    width: 20%;
    padding: 0 0.25rem;
}

.submit-button {
    margin-top: 1rem;
    padding: 1rem;
    background-color: #BECFDB;
    color: inherit;
    text-transform: uppercase;
    border-radius: 2px;
    transition: 0.2s;
}

.submit-button:hover {
    background-color: #7a8e9c;
    color: #fff;
}</style>