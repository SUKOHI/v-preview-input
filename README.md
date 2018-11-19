# v-preview-input
Vue directive allows you to preview image when image file selected.

# Installation

    npm i v-preview-input

# Usage

## for Single image

(in Vue)

    data: {
        profileImage: null
    }

(HTML)

    <input type="file" accept="image/*" v-preview-input="profileImage"><br>
    <img :src="profileImage">

## for Multiple images

(in Vue)

    data: {
        profileImages: []
    }

(HTML)

    <input type="file" accept="image/*" v-preview-input="profileImages" multiple><br>
    <img v-for="profileImage in profileImages" :src="profileImage">
    
# License

This package is licensed under the MIT License.

Copyright 2018 Sukohi Kuhoh