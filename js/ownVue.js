let vm = new Vue({
  el: "#footer-section",
  data:{
    facebook: 'images/icons/facebook_white.png',
    instagram: 'images/icons/instagram_white.png',
    youtube:' images/icons/youtube_white.png'

  },
  methods:{
    hoverFacebook: function(){
      this.facebook='images/icons/facebook.svg'
    },
    unhoverFacebook: function(){
      this.facebook='images/icons/facebook_white.png'
    },
    hoverInstagram: function(){
      this.instagram='images/icons/ig.png'
    },
    unhoverInstagram: function(){
      this.instagram='images/icons/instagram_white.png'
    },
    hoverYoutube: function(){
      this.youtube='images/icons/youtube.png'
    },
    unhoverYoutube: function(){
      this.youtube='images/icons/youtube_white.png'
    }
  }
})
