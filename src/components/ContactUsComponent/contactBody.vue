<template>
<div class="bg_section pb-5">
    <img src="../../assets/contactUsAssets/bg.png" alt="" style="max-width:100%">
    <div class="content_section p-5">
        <form action="" @submit.prevent="postEmail">
        <div class="row px-0 mt-2">
          <div class="col-2 col-lg-1 d-flex justify-content-center align-items-end"><i class="fa fa-user fa-2x" aria-hidden="true"></i> </div>
          <div class="col-10 col-lg-11">
            <div class="field input-group has-validation">
                <input v-model="postMail.fullName" type="text" name="fullname" id="fullname" placeholder="." >
                <label for="fullname">{{ $t('contactUs.name') }}</label>
            </div>
          </div>
          <div class="col-2 col-lg-1"></div>
            <div class="col-10 col-lg-11"><div v-if="validate.fullName == false" class="invalidText"> This field is required. Please input your name.</div></div>
        </div>
        <div class="row px-0 mt-2">
          <div class="col-2 col-lg-1 d-flex justify-content-center align-items-end"><i class="fa fa-envelope fa-2x" aria-hidden="true"></i> </div>
          <div class="col-10 col-lg-11">
            <div class="field">
                <input v-model="postMail.email" type="text" name="email" id="email" placeholder="." >
                <label for="email">{{ $t('contactUs.email') }}</label>
            </div>
          </div>
          <div class="col-2 col-lg-1"></div>
            <div class="col-10 col-lg-11"><div v-if="validate.email == false" class="invalidText"> This field is required. Please input a valid email.</div></div>
        </div>

        <div class="row px-0 mt-2">
          <div class="col-2 col-lg-1 d-flex justify-content-center align-items-end"><i class="fa fa-phone fa-2x" aria-hidden="true"></i> </div>
          <div class="col-10 col-lg-11">
            <div class="field">
                <!-- <input v-model="postMail.contactNum" type="text" name="phoneNum" id="phoneNum" placeholder="." > -->
                <vue-tel-input v-model="postMail.contactNum" mode="international" type="text"  name="phoneNum" id="phoneNum" ></vue-tel-input>
                <label for="phoneNum">{{ $t('contactUs.contact') }}</label>
            </div>
          </div>
          <div class="col-2 col-lg-1"></div>
            <div class="col-10 col-lg-11"><div v-if="validate.contactNum == false" class="invalidText"> This field is required. Please input a valid phone number.</div></div>
        </div>

        <div class="row px-0 mt-2">
          <div class="col-2 col-lg-1 d-flex justify-content-center align-items-end"><i class="fa fa-comments fa-2x" aria-hidden="true"></i> </div>
          <div class="col-10 col-lg-11">
            <div class="field">
                <textarea v-model="postMail.message" id="message" name="message" placeholder="asdasdasd asd " ></textarea>
                <label name="message" for="message">{{ $t('contactUs.message') }}</label>
            </div>
          </div>
          <div class="col-2 col-lg-1"></div>
            <div class="col-10 col-lg-11"><div v-if="validate.message == false" class="invalidText"> This field is required. Please enter text.</div></div>
        </div>

            <div class="col-12 mt-4">
                <button class="button-34" role="button" type="submit">{{ $t('contactUs.button') }}</button>
                <!-- <router-link :to="`/${$i18n.locale}/contactUs`" class="button-34" >{{ $t('contactUs.button') }}</router-link> -->
            </div>
        </form>
    </div>
</div>
</template>

<script>
import { VueTelInput } from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'

export default {

  components: {
    VueTelInput,
  },

    data() {
    return {

      postMail : {
        fullName: '',
        email: '',
        contactNum:'',
        message:''
      },

      validate : {
        fullName: true,
        email: true,
        contactNum:true,
        message:true
      }
    }
    },

    methods: {
    postEmail()
    {
        const checkName = this.postMail.fullName.trim()
        const checkEmail = this.postMail.email.trim()
        const checkNumber = this.postMail.contactNum.trim()
        const checkMsg = this.postMail.message.trim()

        const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
         const validPhone = /\d/g;

        if(checkName == '')
        {
          this.validate.fullName = false;
        }
        else 
        {
          this.validate.fullName = true;
        }

        if(!checkEmail.match(validEmail))
        {
          this.validate.email = false;
        }
        else
        {
          this.validate.email = true;
        }

        if(!checkNumber.match(validPhone))
        {
          this.validate.contactNum = false;
        }
        else 
        {
          this.validate.contactNum = true;
        }
        
        if(checkMsg == '')
        {
          this.validate.message = false;
        }
        else 
        {
          this.validate.message = true;
        }

         if(this.validate.fullName == true && this.validate.contactNum == true && this.validate.email == true && this.validate.message == true)
         {
            if(!alert("Thanks you for getting in touch")){window.location.reload();}

         }
         else
         {
            return
         }
        
    }

    }

}
</script>

<style>
.button-34 {
  background: var(--thirdcolor);
  border-radius: 999px;
  box-shadow: var(--thirdcolor) 0 10px 20px -10px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 18px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  word-break: break-word;
  border: 0;
}

.fa{
  color: var(--thirdcolor);
}

.contactUs_section .bg_section{
    background-color: var(--bgcolor);

}

form {
  max-width: 700px;
  margin: auto;
}

.invalidText{
    color: red;
    text-align: left;
}

/**
* Make the field a flex-container, reverse the order so label is on top.
*/
 
.field {
  display: flex;
  flex-flow: column-reverse;
  /* margin-bottom: 1em; */
  /* margin: 10px 0; */
  margin-top: 40px;
}

textarea {
    min-height: 200px;
}

.vue-tel-input{
  border: unset !important;
}

.vue-tel-input:focus-within{
  box-shadow: unset !important;
}

textarea {
    border: 2px solid var(--thirdcolor) !important;
    background-color: transparent;
    color: var(--thirdcolor);
    padding: 25px 5px 5px 5px !important;
}

input {
    border-bottom: 2px solid var(--thirdcolor) !important;
    background-color: transparent;
    color: var(--thirdcolor);
}

label{
    font-size: 18px !important;
    color: var(--thirdcolor);
}

/**
* Add a transition to the label and input.
* I'm not even sure that touch-action: manipulation works on
* inputs, but hey, it's new and cool and could remove the 
* pesky delay.
*/
label, input, textarea {
  transition: all 0.2s;
  touch-action: manipulation;
}

input, textarea{
  font-size: 1.2em !important;
  border: 0;
  border-bottom: 1px solid #ccc;
  font-family: inherit;
  -webkit-appearance: none;
  border-radius: 0;
  padding: 0;
  cursor: text;
}

input:focus, textarea:focus, .vue-tel-input:focus {
  outline: 0;
  border-bottom: 1px solid #666;
}

label {
  /* text-transform: uppercase; */
  letter-spacing: 0.05em;
}
/**
* Translate down and scale the label up to cover the placeholder,
* when following an input (with placeholder-shown support).
* Also make sure the label is only on one row, at max 2/3rds of the
* field—to make sure it scales properly and doesn't wrap.
*/
input:placeholder-shown + label , textarea + label, .vue-tel-input + label {
  cursor: text;
  /* max-width: 66.66%; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform-origin: left bottom;
  transform: translate(0rem, 1.5rem);
  text-align: left;
}

textarea + label {
  transform: translate(0.5rem, 2rem);
}

.vue-tel-input + label{
  transform: translate(0,0);
}

/**
* By default, the placeholder should be transparent. Also, it should 
* inherit the transition.
*/
::-webkit-input-placeholder {
  opacity: 0;
  transition: inherit;
}
/**
* Show the placeholder when the input is focused.
*/
input:focus::-webkit-input-placeholder {
  opacity: 1;
}
/**
* When the element is focused, remove the label transform.
* Also, do this when the placeholder is _not_ shown, i.e. when 
* there's something in the input at all.
*/
input:not(:placeholder-shown) + label,
input:focus + label, textarea:focus + label{
  transform: translate(0, 0) scale(1);
  cursor: pointer;
  text-align: start;
}

</style>