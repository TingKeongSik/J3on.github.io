// JavaScript Document

document.querySelector('.button-minus').addEventListener('click', function () {
    const qtyField = document.querySelector(`#${this.getAttribute("data-field")}`)
    qtyField.value = Math.max(parseInt(qtyField.value) - 1, parseInt(qtyField.getAttribute('min')))
})
document.querySelector('.button-plus').addEventListener('click', function () {
    const qtyField = document.querySelector(`#${this.getAttribute("data-field")}`)
    qtyField.value = Math.min(parseInt(qtyField.value) + 1, parseInt(qtyField.getAttribute('max')))
})

const scroller = document.querySelector("#scroller")
				let repeater, scrollSpeed = 4;
				document.querySelector("[data-scroll='L']").addEventListener("mousedown", ()=>{
					repeater = setInterval(()=> {
						scroller.scrollLeft -= scrollSpeed;
					}, 1)
				})
				document.querySelector("[data-scroll='R']").addEventListener("mousedown", ()=>{
					repeater = setInterval(()=> {
						scroller.scrollLeft += scrollSpeed;
					}, 1)
				})
				document.addEventListener("mouseup", ()=>{
					clearInterval(repeater)
				})

function myFunction() {
                  document.getElementById("email-form").reset();
                }



				const viewBtn = document.querySelector(".view-modal"),
				popup = document.querySelector(".popup"),
				close = popup.querySelector(".close"),
				field = popup.querySelector(".field"),
				input = field.querySelector("input"),
				copy = field.querySelector("button");
			
				viewBtn.onclick = ()=>{
				  popup.classList.toggle("show");
				}
				close.onclick = ()=>{
				  viewBtn.click();
				}
			
				copy.onclick = ()=>{
				  input.select(); //select input value
				  if(document.execCommand("copy")){ //if the selected text copy
					field.classList.add("active");
					copy.innerText = "Copied";
					setTimeout(()=>{
					  window.getSelection().removeAllRanges(); //remove selection from document
					  field.classList.remove("active");
					  copy.innerText = "Copy";
					}, 3000);
				  }
				}


			