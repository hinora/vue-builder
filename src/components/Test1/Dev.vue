<template>
    <div>
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
            crossorigin="anonymous"
        />

        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
            integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
            crossorigin="anonymous"
        />
    </div>
</template>
<script>
export default {
    data: function() {
        return {};
    },
    mounted() {
        this.loadScript("https://code.jquery.com/jquery-3.4.1.min.js", () => {
            this.loadScript(
                "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
            );
        });
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
