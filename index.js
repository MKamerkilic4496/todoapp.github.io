// ADD A ELEMENT TO LIST:
const addForm=document.querySelector('.add');
const list=document.querySelector('.todos');
const search=document.querySelector('.search input');
// search classı altındaki inputu seç dedim.
const generateTemplate=todo=>{
   const html=`<li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
              </li>`;
   list.innerHTML+=html;
}
addForm.addEventListener('submit',e=>{
    e.preventDefault();
    // Prevent default is blocking to refresh(page)
    const todo=addForm.add.value.trim();
    //yukarıdaki yapı form.name.value şeklinde bir kullanımdır.
    // console.log(todo);
    if(todo.length>0){
      generateTemplate(todo);
      addForm.reset();
    }
 
})

// REMOVE ELEMENT FROM LIST:
list.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    
    }
})

// SEARCH ELEMENT FROM LIST:

const filterTodos=term =>{
    // console.log(term);
    // console.log(list.children);
    // console.log(Array.from(list.children));
    
    Array.from(list.children)
    .filter(todox => !todox.textContent.toLowerCase().includes(term))
    .forEach(todox => todox.classList.add("filtered"));
    // debugger;
     
    Array.from(list.children)
    .filter(todox => todox.textContent.toLowerCase().includes(term))
    .forEach(todox => todox.classList.remove("filtered"));
  
   
}
search.addEventListener('keyup',()=>{
   const term=search.value.trim().toLowerCase();
    // console.log(term);
   filterTodos(term);
  
})
    // const kamer='kamer';
    // if(kamer.includes(term)){
    //     console.log('başarılı');
    // }
    // else{
    //     console.log('İptal!!');
    // }

// NOTLAR:
// Klavyeye bastığımızda keydown tetiklenir ,bıraktığımızda keyup tetiklenir.
// value ile inputta girmiş olduğumuz değere erişebiliriz.Çünkü search'de direk inputu seçtik.Normalde form.name.value'yu kullanıyoruz.
// e.targeti tıkladığımız elementi seçmesi için kullanırız.Burdaki parentElement ise tıkladığımız elementin parentini sil manasında kullandık.
// Yukarıdaki kodu ise boşluğu listeye eklemesin diye yaptık.Girilen karakter uzunluğu 0 dan büyükse listeye ekle demiş olduk.
// trimEnd sonda boşluklu karakteri kaldırır ,trimStart baştaki boşluklu karakteri kaldırır.
 // Yukarıdaki addForm.reset ilede karakteri girdikten sonra inputu sıfırlamak için kullanırız.