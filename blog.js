let blogs = [] //array of objects- setiap indexnya mewakili object blog-post - dan diletak diatas agar menjadi var global agar data post sebelumnya tidak ter-replace
const month = [
  'January',
  'Februari',
 'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember']
  
function addBlog(event) { // event adalah parameter-bebas didefinisikan
    
    

    event.preventDefault() // .preventDefault membuat browser ga reload karna metod onsubmit dari html membuat reload otomatis

    let title = document.getElementById("input-blog-title").value //mengambil nilai
    let content = document.getElementById('input-blog-content').value
    let startDate = document.getElementById('input-start-date').value
    let endDate = document.getElementById('input-end-date').value
    let image = document.getElementById('input-blog-image') //mengambil data image yaitu tipe data blob- kalau pake.value maka hasilnya adalah path file image
    
    image = URL.createObjectURL(image.files[0]) 

    let blog = {  //membungkus data inputan menjadi object
        title,
        startDate,
        endDate,
        content,
        image,
        postedAt: new Date()
    }

    

    blogs.push(blog) //metod push digunakan agar suatu index tidak ter-replace saat ditambahkan post baru

    renderBlog()

}

function renderBlog() {
    

    let lengthData = blogs.length // untuk batas atas loop selalu dinamis sesuai jumlah data blog-post

    let blogContainer = document.getElementById('contents')

    blogContainer.innerHTML = firstBlogContent() // gunanya agar tidak terjadi bug berupa render blog-post double2
    // looping 
    for(let i = 0; i < lengthData; i++) {
        blogContainer.innerHTML += `
        <div class="blog-list-item">
          <div class="blog-image">
            <img src="${blogs[i].image}" alt="" />
          </div>
          <div class="blog-content">
            
            <h1>
              <a href="blog-detail.html" target="_blank"
                >${blogs[i].title}</a
              >
            </h1>
            <div class="detail-blog-content">
            ${getFullTime(blogs[i].postedAt)} | ${blogs[i].author}
            </div>
            <p>
            ${blogs[i].content}
            </p>
            <div style="text-align: right">
              <span style="color: grey; font-size: 15px">
              ${getDistanceTime(blogs[i].postedAt)}</span>
            </div> 
            <div class="btn-group">
              <button class="btn-edit">edit</button>
              <button class="btn-post" >delete</button>
            </div>
          </div>
        </div>
        `
    }
    
}

function getFullTime(time) {
  const date = time.getDate()
  const monthIndex = time.getMonth()
  const year = time.getFullYear()
  const hours = time.getHours()
  const minutes = time.getMinutes()

 
  return `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`
}
 
function getDistanceTime(time) {
  const distance = new Date() - new Date(time)

  const milisecond = 1000
  const secondInMinute = 60
  const minutesInHour = 60
  const secondsInHour = secondInMinute * minutesInHour
  const hoursInDay = 23

  let dayDistance =distance / (milisecond * secondsInHour * hoursInDay)

  if (dayDistance >= 1) {
    const time = Math.floor(dayDistance) + ' day ago'
    return time}
    else {
    //convert to hour
    let hourDistance = Math.floor(distance/ (milisecond * secondsInHour))

    if (hourDistance > 0) {
      return hourDistance + ' hour ago'
    } else {
      //convert to minute
      const minuteDistance = Math.floor(distance/ (milisecond * secondInMinute))
      return minuteDistance + ' minute ago'
    }
  }

  
}

setInterval(function() {
  renderBlog()
},2000)

function firstBlogContent() {  // intinya buat atasi bug - dan dipanggil diatas sebelum looping 
  return `
  <div class="blog-list-item">
          <div class="blog-image">
            <img src="assets/blog-img.png" alt="" />
          </div>
          <div class="blog-content">
            
            <h1>
              <a href="blog-detail.html" target="_blank"
                >Dumbways Mobile Appb</a
              >
            </h1>
            <div class="detail-blog-content">
              12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
            </div>
            <p>
              Ketimpangan sumber daya manusia (SDM) di sektor digital masih
              menjadi isu yang belum terpecahkan. Berdasarkan penelitian
              ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
              meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Quam, molestiae
              numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
              eligendi debitis?
            </p>
            
            <div style="text-align: right">
              <span style="color: grey; font-size: 15px">2 hours ago</span>
            </div>
            
          </div>
        </div>
  `
}

