'use strict';

// Elements
const inputName = document.getElementById('authorname');
const inputEmail = document.getElementById('.authoremail');
const inputTitle = document.getElementById('.authorblogtitle');
const inputContent = document.getElementById('.authorblogcontent');

const form = document.querySelector('form');

const showMenuBar = document.getElementById('menuItems');
const showBlogForm = document.querySelector('.submain');
const hideBlog = document.querySelector('.maincontent');

const btnMenuClose = document.querySelector('.menubar');
const btnSubmit = document.querySelector('.submit');
const btnCreateBlog = document.querySelector('.create-blog');
const btnclose = document.querySelector('.close-x');

showMenuBar.style.maxHeight = '0px';
showMenuBar.style.padding = '0px';

function togglemenu() {
  if (showMenuBar.style.maxHeight == '0px') {
    showMenuBar.style.maxHeight = '320px';
    showMenuBar.style.padding = '0px';
  } else {
    showMenuBar.style.maxHeight = '0px';
    showMenuBar.style.padding = '0px';
  }
}

btnCreateBlog.addEventListener('click', function () {
  console.log(`Button`);
  showBlogForm.classList.remove('hidden');
  hideBlog.classList.add('hidden');
});

btnclose.addEventListener('click', function () {
  showBlogForm.classList.add('hidden');
  hideBlog.classList.remove('hidden');
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let invalidForm = false;
  const formData = new FormData(this);
  const entries = formData.entries();
  const data = Object.fromEntries(entries);
  console.log(data);

  //Validation
  if (
    data.authorname == '' ||
    data.authorname.length <= 2 ||
    data.authorname == Number(data.authorname)
  ) {
    document.querySelector('.error-name').innerHTML =
      '**Please enter appropriate Name in the field';
    invalidForm = true;
  }

  if (data.authoremail == '' || Number(data.authoremail.length) <= 7) {
    document.querySelector('.error-email').innerHTML =
      '**Please enter appropriate Email in the field';
    invalidForm = true;
  }

  if (
    data.authorblogtitle == '' ||
    Number(data.authorblogtitle.length) < 5 ||
    Number(data.authorblogtitle.length) > 50
  ) {
    document.querySelector('.error-title').innerHTML =
      '**Please enter appropriate Title in the field';
    invalidForm = true;
  }

  if (
    data.authorblogcontent == '' ||
    Number(data.authorblogcontent.length) <= 50
  ) {
    document.querySelector('.error-content').innerHTML =
      '**Please fill the Blog Content in the field with words ranging from 50 to 100';
    invalidForm = true;
  }

  console.log(invalidForm);
  if (invalidForm) {
    console.log(`bye`);
    return invalidForm;
  } else {
    console.log(`hi`);
    const insertbg = `<div class="containerblog">
    <div class="blog-header">
      <div class="blog-title">
        <h1>${data.authorblogtitle}</h1>
      </div>
      <div class="blog-author-details">
        <p>
          January 1, 2014 by <span class="author-name">${data.authorname}</span>
        </p>
      </div>
    </div>
    <div class="blog-body">
      <div class="blog-content">
        ${data.authorblogcontent}
      </div>
    </div>
  </div>`;
    document
      .querySelector('.insertblog')
      .insertAdjacentHTML('afterbegin', insertbg);

    showBlogForm.classList.add('hidden');
    hideBlog.classList.remove('hidden');

    form.reset();
  }
});
