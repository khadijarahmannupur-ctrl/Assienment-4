// all list item is haire
let interviewList = [];
let rejectedList = [];

// all counter is hare
let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

// all btn is hare
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

// all section is hare
const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const filteredSection = document.getElementById('filtered-section');


function calculateCount(){
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

calculateCount();

function toggleStyle(id){
    allFilterBtn.classList.remove('bg-blue-500', 'text-white');
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white');
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white');
    
    
    allFilterBtn.classList.add('bg-white', 'text-[#64748B]');
    interviewFilterBtn.classList.add('bg-white', 'text-[#64748B]');
    rejectedFilterBtn.classList.add('bg-white', 'text-[#64748B]');
    
  const selected = document.getElementById(id);
    selected.classList.remove('bg-white','text-[#64748B]');
    selected.classList.add('bg-blue-500', 'text-white');

   if(id == 'interview-filter-btn'){
    allCardSection.classList.add('hidden');
    filteredSection.classList.remove('hidden')
   } 
   else if(id == 'all-filter-btn'){
    allCardSection.classList.remove('hidden');
    filteredSection.classList.add('hidden')
   }
}


mainContainer.addEventListener('click', function(event){
    
//    interview click function

    if(event.target.classList.contains('interview-btn')){
        
    const parentNode = event.target.parentNode.parentNode;

    const companyName = parentNode.querySelector('.companeyName').innerText;
    const positionName = parentNode.querySelector('.positionName').innerText;
    const selary = parentNode.querySelector('.selary').innerText;
    // const cngStatus = parentNode.querySelector('.cngStatus').innerText;
    const cngStatus ='Applied';
    const notes = parentNode.querySelector('.notes').innerText;
    
    parentNode.querySelector('.cngStatus').innerText = 'Applied';
    const cardInfo = {
        companyName, 
        positionName, 
        selary: 'Applied', 
        cngStatus, 
        notes
    }
    // console.log(cardInfo.companyName)

    const companyExist = interviewList.find(item=> item.companyName == cardInfo.companyName);
    if(!companyExist){
        interviewList.push(cardInfo);
    }
    // console.log(interviewList);
    console.log(companyExist);

    renderInterview();
    calculateCount();
    }

//   rejected click function

    else if(event.target.classList.contains('rejected-btn')){
        
    const parentNode = event.target.parentNode.parentNode;

    const companyName = parentNode.querySelector('.companeyName').innerText;
    const positionName = parentNode.querySelector('.positionName').innerText;
    const selary = parentNode.querySelector('.selary').innerText;
    // const cngStatus = parentNode.querySelector('.cngStatus').innerText;
    const cngStatus ='Applied';
    const notes = parentNode.querySelector('.notes').innerText;
    
    parentNode.querySelector('.cngStatus').innerText = 'Applied';
    const cardInfo = {
        companyName, 
        positionName, 
        selary: 'Applied', 
        cngStatus, 
        notes
    }
    // console.log(cardInfo.companyName)

    const companyExist = interviewList.find(item=> item.companyName == cardInfo.companyName);
    if(!companyExist){
        interviewList.push(cardInfo);
    }
    // console.log(interviewList);
    console.log(companyExist);

    renderInterview();
    calculateCount();
    }
   
})

function renderInterview(){
    
    filteredSection.innerHTML = '' 

    for(let interview of interviewList){
        // console.log(interview);
        let div = document.createElement('div');
        div.className = 'card-container border-2 border-[#64748B] p-6 flex mb-4';
        div.innerHTML = `
        <!-- main part 1-->
                 <div class="card-body p-0 space-y-5">
                    <!-- part-1 -->
                    <div>
                    <p class="companeyName text-lg font-semibold text-[#002C5C]">${interview.companyName}</p>
                    <p class="positionName text-[16px] text-[#64748B]">React Native Developer</p>
                    </div>
                   
                    <!-- part-2 -->
                    <div>
                        <p class="selary text-sm text-[#64748B]">Remote • Full-time • $130,000 - $175,000</p>
                    </div>
                    
                    <!-- part-3 -->
                        <div>
                            <p class="cngStatus text-[16px] font-medium text-[#002C5C] bg-[#EEF4FF] px-3 py-2 rounded-lg w-[120px]">${interview.cngStatus}
                        </p>
                     <p class="notes text-[#323B49]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                        </div>
                    
                        <div>
                        <button class="interview-btn text-sm font-semibold rounded-md text-[#10B981] border-2 border-[#10B981] px-4 py-2 mr-2">Interview</button>
                        <button class="prjected-btn  text-sm font-semibold rounded-md text-[#EF4444] border-2 border-[#EF4444] px-4 py-2">Rejected</button> 
                        </div>   
                      <!-- main part 2 --> 
                 </div>

                <!-- main part 2-->
                 <div>
                    <button class="btn-delete bg-base-100 rounded-full text-[#64748B] px-3 py-2"><i class="fa-regular fa-trash-can"></i></button>
                 </div>
        `
        filteredSection.appendChild(div)
    }
}
