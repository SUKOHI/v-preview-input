Vue.directive('preview-input', {
    bind: function(el, binding, vnode) {

        var isMultiple = (el.getAttribute('multiple') === 'multiple');
        var expression = binding.expression;

        el.addEventListener('change', function(e) {

            vnode.context[expression] = (isMultiple) ? [] : null;
            var files = e.target.files;

            if(files.length > 0) {

                for(var i = 0 ; i < files.length ; i++) {

                    var file = files[i];
                    var reader = new FileReader();
                    reader.onload = function(e) {

                        var imageData = e.target.result;

                        if(isMultiple) {

                            vnode.context[expression].push(imageData)


                        } else {

                            vnode.context[expression] = imageData;

                        }

                    };
                    reader.readAsDataURL(file);

                }

            }

        });

    }
});