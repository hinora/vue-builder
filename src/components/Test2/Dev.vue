<template>
    <div>
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />
    </div>
</template>
<script>
export default {
    data: function() {
        return {};
    },
    mounted() {
        this.loadScript(
            "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
            () => {
                this.loadScript(
                    "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js",
                    () => {
                        this.loadScript(
                            "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
                        );
                    }
                );
            }
        );
    },
    methods: {
        createElement(tagName, attr) {
            let recaptchaScript = document.createElement(tagName);
            for (const property in attr) {
                recaptchaScript.setAttribute(property, attr[property]);
            }
            document.head.appendChild(recaptchaScript);
        },
        loadScript(path, callback) {
            var done = false;
            var scr = document.createElement("script");

            scr.onload = handleLoad;
            scr.onreadystatechange = handleReadyStateChange;
            scr.onerror = handleError;
            scr.src = path;
            document.body.appendChild(scr);

            function handleLoad() {
                if (!done) {
                    done = true;
                    if (callback) {
                        callback(path, "ok");
                    }
                }
            }

            function handleReadyStateChange() {
                var state;

                if (!done) {
                    state = scr.readyState;
                    if (state === "complete") {
                        handleLoad();
                    }
                }
            }
            function handleError() {
                if (!done) {
                    done = true;
                    if (callback) {
                        callback(path, "error");
                    }
                }
            }
        }
    }
};
</script>
<style></style>
