<template>
  <div class="bg-light vh-100">    
    <div class="container" >
      <div class='d-flex justify-content-between align-items-center py-1'>
        <button type="button" class='btn btn-outline-secondary' @click.stop="back">
          <i class='fas fa-chevron-left fa-lg'/>
        </button>
        <h5 class="text-uppercase" id='offcanvasRightLabel'>Carrito</h5>
      </div>

      <!--
      <div id='carouselCar' class="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
        <div class="carousel-indicators">
          <button class="btn active" type="button" data-bs-target="#carouselCar" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1">
            <i class="fas fa-shopping-cart fa-lg text-dark"></i>
          </button>
          <button class="btn bg-secondary" type="button" data-bs-target="#carouselCar" data-bs-slide-to="1" aria-label="Slide 2">
            <i class="fas fa-address-card fa-lg"></i>
          </button>
          <button class="btn bg-secondary" type="button" data-bs-target="#carouselCar" data-bs-slide-to="2" aria-label="Slide 3">
            <i class="fab fa-whatsapp fa-lg"></i>
          </button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="border-bottom border-2 border-success" style="overflow:scroll; height:80vh">
              <ul class="list-group">
                <li class='ist-group-item bg-white m-0 my-1 p-1' v-for='(c, index) of car' :key="index">
                  <div class='row m-0 p-0'>
                    <div class='col-3 p-0'>
                      <img class='rounded w-100' v-bind='{alt: c.title, src: c.picture}'/>
                    </div>
                    <div class='col-9 p-0 text-end'>
                      <h1 class='fs-4 m-0'>{{ c.title }}</h1>
                      <p class='text-secondary m-0'>1 x <span class='price'>{{ c.price }}</span></p>
                      <span class='fw-bold price text-success'>{{ c.quantity * c.price }}</span>
                    </div>
                  </div>
                  <div class='row m-0 p-0'>
                    <div class='col-4 p-0 d-flex justify-content-center align-items-center'>
                      <button class='btn' v-on:click='modalDelete(index)'>
                        <i class='far fa-trash-alt text-danger fs-2'/>
                      </button>
                    </div>
                    <div class='col-8 p-0'>
                      <div class='rounded border border-secondary d-flex justify-content-between align-items-center'>
                        <button class='btn text-danger fs-3 px-3 py-0' v-on:click='subtraction(index)'>&#8722;</button>
                        <span class='fs-3'>{{ c.quantity }}</span>
                        <button class='btn text-primary fs-3 px-3 py-0' v-on:click='addition(index)'>+</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class='bg-white d-flex justify-content-between align-items-center' v-if='car.length&gt;0'>
                <span>Total:</span>
                <div>
                  <span class='fw-bold'>{{ totalItems }}</span> | <span class='fw-bold price'>{{ totalPrice }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="border-bottom border-2 border-success" style="overflow:scroll; height:80vh">
            </div>
          </div>
          <div class="carousel-item">
            <div class="border-bottom border-2 border-success" style="overflow:scroll; height:80vh">
            </div>
          </div>
        </div>
      </div>
      -->

    <Splide :options="options">
      <SplideSlide>
        <ul class="list-group">
          <li class='ist-group-item bg-white m-0 my-1 p-1' v-for='(c, index) of car' :key="index">
            <div class='row m-0 p-0'>
              <div class='col-3 p-0'>
                <img class='rounded w-100' v-bind='{alt: c.title, src: c.picture}'/>
              </div>
              <div class='col-9 p-0 text-end'>
                <h1 class='fs-4 m-0'>{{ c.title }}</h1>
                <p class='text-secondary m-0'>1 x <span class='price'>{{ c.price }}</span></p>
                <span class='fw-bold price text-success'>{{ c.quantity * c.price }}</span>
              </div>
            </div>
            <div class='row m-0 p-0'>
              <div class='col-4 p-0 d-flex justify-content-center align-items-center'>
                <button class='btn' v-on:click='modalDelete(index)'>
                  <i class='far fa-trash-alt text-danger fs-2'/>
                </button>
              </div>
              <div class='col-8 p-0'>
                <div class='rounded border border-secondary d-flex justify-content-between align-items-center'>
                  <button class='btn text-danger fs-3 px-3 py-0' v-on:click='subtraction(index)'>&#8722;</button>
                  <span class='fs-3'>{{ c.quantity }}</span>
                  <button class='btn text-primary fs-3 px-3 py-0' v-on:click='addition(index)'>+</button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </SplideSlide>
      <SplideSlide>
        Hello 2
      </SplideSlide>
    </Splide>

    <div class="row">
      <ul class="splide__pagination">
        <li>
          <button
            class="splide__pagination__page is-active"
            type="button"
            aria-controls="splide01-slide01"
            aria-label="Go to slide 1"
            aria-current="true"
          >
          </button>
        </li>
        <li>
          <button
            class="splide__pagination__page"
            type="button"
            aria-controls="splide01-slide02"
            aria-label="Go to slide 2"
          >
          </button>
        </li>
        ......
      </ul>
    </div>

    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';


export default {

  name: 'carFull',
  components: {
    Splide, SplideSlide,
  },
  setup() {
    const options = {
      rewind:     true,
      gap:        '1rem',
      arrows:     false,
      pagination: false
    };
    return { options };
  },
  computed: {
    ...mapState(['car']),
    ...mapGetters(['totalItems', 'totalPrice'])
  },
  methods: {
    back(){
      this.$router.go(-1)
    }
  }

}
</script>

<style scoped>

  button.active{
    color:      black;
    background: #d1e7dd;
  }

</style>