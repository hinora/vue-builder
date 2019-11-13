<template>
    <div class="row">
        <div 
            v-for="image in list_image"
            class="col-md-3 col-xs-12">
            <div class="list-face">
                <div class="list-face__image">
                    <img src="https://www.w3schools.com/bootstrap4/cinqueterre.jpg" class="rounded" alt="Cinque Terre">
                </div>
                <div class="list-face__action">
                    <span
                        v-if="image.uploaded_api==1" class="badge badge-success">Uploaded</span>
                    <span
                        v-else class="badge badge-secondary">Not Upload</span>
                    <button @click="delete_image(image)" class="btn btn-sm btn-danger pull-right">Delete</button>
                    <button @click="upload_image(image)" class="btn btn-sm btn-primary pull-right">Upload API</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    components: {
    },
    props: {
        api_url: {
            type: String,
            default: 'http://face-detect.test/face/person/add_face/1'
        },
    },
    data() {
        return {
            list_image:[
                {
                    id_face:1,
                    name_in_directory:1,
                    directory_save:1,
                    uploaded_api:0
                },
                {
                    id_face:2,
                    name_in_directory:2,
                    directory_save:1,
                    uploaded_api:1
                },
                {
                    id_face:3,
                    name_in_directory:3,
                    directory_save:1,
                    uploaded_api:0
                }
            ]
        };
    },  
    methods: {
        delete_image(image){
            if(confirm("Xóa face?")){
                console.log(image);
            }
        },
        upload_image(image){
            console.log(image);
        }
    }
};
</script>

<style lang="scss">
    .list-face{
        margin:5px;
        width: 100%;
        padding: 10px;
        border:1px solid #dcdcdc;
        &__image{
            height: 250px;
            overflow: hidden;
            display: flex;
            justify-items: center;
            align-items: center;
            width: 100%;
            border-bottom: 1px solid #dcdcdc;
            img{
                width: 100%;
            }
        }
        &__action{
            width: 100%;
            margin-top: 5px;
        }
    }
</style>
