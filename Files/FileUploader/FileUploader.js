// ! https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
// ! https://www.youtube.com/watch?v=6uHfIv4981U
// ! https://codepen.io/joezimjs/pen/yPWQbd?editors=1010

let dropArea = document.querySelector('.dropArea');
let uploadProgress = [];
let progressBar = document.querySelector('.progressBar');

// * assigns preventDefaults across these events
// ? runs through a list of string each of these events trigger a function called preventdefaults
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false);
    });

// * Highlight drop area when item is dragged over it
    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false) // ? on event dragenter or dragover trigger fn highlight
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false) // ? on event dragleave or drop trigger fn unhighlight
    });

// * Handle dropped files
    dropArea.addEventListener('drop', handleDrop, false)


// * Methods
    function preventDefaults(e) {
        e.preventDefault(); // ? will cancel events if it exists, preventing default event behavior
        e.stopPropagation(); // ? prevents the same event from being called
    }

    function highlight(e) {
        dropArea.classList.add('highlight') // ? adds a class called highlight that has some css attached
    }

    function unhighlight(e) {
        dropArea.classList.remove('highlight') // ? removes class callled active that has some css
    }

    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files); // ? an obj inside of drag event that contains dataTrafer props including an arr of files with props
    }

    function handleFiles(files) {
        files = [...files] // ? this is a rest operator, each file arg passed adds a file object into the files arr
        initializeProgress(files.length)
        files.forEach(uploadFile)
        files.forEach(previewFile)
    }

    function initializeProgress(numFiles) { // ? initializeProgress takes a number(number of files)
        progressBar.value = 0 // ? progress bar being 
        uploadProgress = []
      
        for(let i = numFiles; i > 0; i--) {
          uploadProgress.push(1)
          console.log(uploadProgress);
        }
    }

    function previewFile(file) {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = function() {
            let img = document.createElement('img')
            img.src = reader.result
            document.querySelector('.gallery').appendChild(img)
        }
    }
      
    function uploadFile(file, i) {
        var url = 'https://api.cloudinary.com/v1_1/joezim007/image/upload';
        var xhr = new XMLHttpRequest();
        var formData = new FormData();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      
        // Update progress (can be used to show progress indicator)
        xhr.upload.addEventListener("progress", function(e) {
            updateProgress(i, (e.loaded * 100.0 / e.total) || 100)
        });
      
        xhr.addEventListener('readystatechange', function(e) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                updateProgress(i, 100) // <- Add this
            }
            else if (xhr.readyState == 4 && xhr.status != 200) {
                // Error. Inform the user
            }
        });
      
        formData.append('upload_preset', 'ujpu6gyk');
        formData.append('file', file);
        xhr.send(formData);
    }

    function updateProgress(fileNumber, percent) {
        uploadProgress[fileNumber] = percent
        let total = uploadProgress.reduce((tot, curr) => tot + curr, 0) / uploadProgress.length
        // console.debug('update', fileNumber, percent, total)
        progressBar.value = total
    }
    