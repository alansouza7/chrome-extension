
let myLeads = []
const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEL = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')
const tabBtn = document.getElementById('tab-btn')

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) 

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)  
}

function render(leadsToRender){  
    let leads = ``
    leadsToRender.forEach(function(lead){  
        leads += `<li><a target="_blank" href="#">${lead}</a></li>`   
        })
        ulEL.innerHTML = leads
}

inputBtn.addEventListener("click", function(){                          
    myLeads.push(inputEl.value)
    inputEl.value = ``  
    localStorage.setItem("myLeads",JSON.stringify(myLeads))  
    render(myLeads)              
})


tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
    })
})


deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()    
    myLeads = []            
    render(myLeads)                
})





