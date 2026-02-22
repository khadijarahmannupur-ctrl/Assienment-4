// all list item is haire
let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

// all counter is hare
let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');
let titleCount = document.getElementById('title-count');

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
    
    // tab wise count
    if(currentStatus === 'interview-filter-btn'){
        titleCount.innerText = interviewList.length;
    }
    else if(currentStatus === 'rejected-filter-btn'){
        titleCount.innerText = rejectedList.length;
    }
    else{
        titleCount.innerText = allCardSection.children.length;
    }
   
}


function toggleStyle(id){
    allFilterBtn.classList.remove('bg-blue-500', 'text-white');
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white');
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white');
    
    
    allFilterBtn.classList.add('bg-white', 'text-[#64748B]');
    interviewFilterBtn.classList.add('bg-white', 'text-[#64748B]');
    rejectedFilterBtn.classList.add('bg-white', 'text-[#64748B]');
    
    const selected = document.getElementById(id);
    currentStatus = id;
    
    selected.classList.remove('bg-white','text-[#64748B]');
    selected.classList.add('bg-blue-500', 'text-white');
    
    if(id == 'interview-filter-btn'){
        allCardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderInterview();
    } 
    else if(id == 'all-filter-btn'){
        allCardSection.classList.remove('hidden');
        filteredSection.classList.add('hidden')
    }
    else if(id == 'rejected-filter-btn'){
        allCardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderRejected();
    }
    calculateCount();
}

// calculateCount();

mainContainer.addEventListener('click', function(event){
    
//    interview click function

    if(event.target.classList.contains('interview-btn')){
        
    const parentNode = event.target.parentNode.parentNode;

    const companyName = parentNode.querySelector('.companeyName').innerText;
    const positionName = parentNode.querySelector('.positionName').innerText;
    const selary = parentNode.querySelector('.selary').innerText;
    // const cngStatus = parentNode.querySelector('.cngStatus').innerText;
    const cngStatus ='Interview';
    const notes = parentNode.querySelector('.notes').innerText;
    
    parentNode.querySelector('.cngStatus').innerText = 'Interview';
    const cardInfo = {
        companyName, 
        positionName, 
        selary, 
        cngStatus, 
        notes
    }

    const companyExist = interviewList.find(item=> item.companyName == cardInfo.companyName);
    if(!companyExist){
        interviewList.push(cardInfo);
    }
    
    rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName);

    if(currentStatus == 'rejected-filter-btn'){
        renderRejected();
    }

    // renderInterview();
    calculateCount();
    }

//   rejected click function

    else if(event.target.classList.contains('rjected-btn')){
        
    const parentNode = event.target.parentNode.parentNode;

    const companyName = parentNode.querySelector('.companeyName').innerText;
    const positionName = parentNode.querySelector('.positionName').innerText;
    const selary = parentNode.querySelector('.selary').innerText;
    // const cngStatus = parentNode.querySelector('.cngStatus').innerText;
    const cngStatus ='Rejected';
    const notes = parentNode.querySelector('.notes').innerText;
    
    parentNode.querySelector('.cngStatus').innerText = 'Rejected';
    const cardInfo = {
        companyName, 
        positionName, 
        selary, 
        cngStatus, 
        notes
    }
    // console.log(cardInfo.companyName)

    const companyExist = rejectedList.find(item=> item.companyName == cardInfo.companyName);
    if(!companyExist){
        rejectedList.push(cardInfo);
    }
    
    interviewList = interviewList.filter(item=> item.companyName != cardInfo.companyName);

    if(currentStatus == 'interview-filter-btn'){
        renderInterview();
    }

    // renderRejected();
    calculateCount();
    }

    // delete button function
    else if(event.target.closest('.btn-delete')){
    
    const card = event.target.closest('.card-container');
    const companyName = card.querySelector('.companeyName').innerText;

    
    interviewList = interviewList.filter(item => item.companyName !== companyName);

    rejectedList = rejectedList.filter(item => item.companyName !== companyName);

    card.remove('hidden');

    calculateCount();
}
   
})

// interview page show design
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
                    <p class="positionName text-[16px] text-[#64748B]">${interview.positionName}</p>
                    </div>
                   
                    <!-- part-2 -->
                    <div>
                        <p class="selary text-sm text-[#64748B]">${interview.selary}</p>
                    </div>
                    
                    <!-- part-3 -->
                        <div>
                            <p class="cngStatus text-[16px] font-medium text-[#002C5C] bg-[#EEF4FF] px-3 py-2 rounded-lg w-[120px]">${interview.cngStatus}
                        </p>
                     <p class="notes text-[#323B49]">${interview.notes}</p>
                        </div>
                    
                        <div>
                        <button class="interview-btn text-sm font-semibold rounded-md text-[#10B981] border-2 border-[#10B981] px-4 py-2 mr-2">Interview</button>
                        <button class="rjected-btn  text-sm font-semibold rounded-md text-[#EF4444] border-2 border-[#EF4444] px-4 py-2">Rejected</button> 
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

//rejected page show design
function renderRejected(){
    
    filteredSection.innerHTML = '' 

    for(let rejected of rejectedList){
        // console.log(interview);
        let div = document.createElement('div');
        div.className = 'card-container border-2 border-[#64748B] p-6 flex mb-4';
        div.innerHTML = `
        <!-- main part 1-->
                 <div class="card-body p-0 space-y-5">
                    <!-- part-1 -->
                    <div>
                    <p class="companeyName text-lg font-semibold text-[#002C5C]">${rejected.companyName}</p>
                    <p class="positionName text-[16px] text-[#64748B]">${rejected.positionName}</p>
                    </div>
                   
                    <!-- part-2 -->
                    <div>
                        <p class="selary text-sm text-[#64748B]">${rejected.selary}</p>
                    </div>
                    
                    <!-- part-3 -->
                        <div>
                            <p class="cngStatus text-[16px] font-medium text-[#002C5C] bg-[#EEF4FF] px-3 py-2 rounded-lg w-[120px]">${rejected.cngStatus}
                        </p>
                     <p class="notes text-[#323B49]">${rejected.notes}</p>
                        </div>
                    
                        <div>
                        <button class="interview-btn text-sm font-semibold rounded-md text-[#10B981] border-2 border-[#10B981] px-4 py-2 mr-2">Interview</button>
                        <button class="rjected-btn  text-sm font-semibold rounded-md text-[#EF4444] border-2 border-[#EF4444] px-4 py-2">Rejected</button> 
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
