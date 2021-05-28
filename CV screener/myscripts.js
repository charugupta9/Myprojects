console.log('crurjufjr');
const data = [
    {
        name: 'Rohan Das',
        age: '20',
        city: 'udaipur',
        language: 'python',
        framework: 'djanjo',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Rohan sharma',
        age: '20',
        city: 'Kota',
        language: 'python',
        framework: 'djanjo',
        image: 'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
        name: 'Subham Sharma',
        age: '20',
        city: 'Ajmer',
        language: 'python',
        framework: 'djanjo',
        image: 'https://randomuser.me/api/portraits/men/77.jpg'
    },
    {
        name: 'Ashush Gupta',
        age: '20',
        city: 'Jaipur',
        language: 'python',
        framework: 'djanjo',
        image: 'https://randomuser.me/api/portraits/men/78.jpg'
    },
]
// CV Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}
const candidates = cvIterator(data);
// Button listener for next button 
const next = document.getElementById('next');
next.addEventListener('click', nextCV);
function nextCV () {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    image.innerHTML = `<img src='${currentCandidate.image}'>`
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">Name: ${currentCandidate.age}</li>
    <li class="list-group-item">Name: ${currentCandidate.city}</li>
    <li class="list-group-item">Name: ${currentCandidate.language}</li>
    <li class="list-group-item">Name: ${currentCandidate.framework}</li>
    
  </ul>`
}