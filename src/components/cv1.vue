<template>
    <div class="app">
        <nav>
        <h1 class="hp">Layla Robi'atus<br><span id="lyl">Syarifah</span></h1><br>
        <img src="layla.jpg" alt="cek kuota anda,terimakasih"><br><br>
            <h2 class="hp">Contact<hr></h2>
                <p><b>Address:</b></p>
                    <p>{{ address }}</p>
                <p><b>Phone:</b></p>
                    <p>{{ phone }}</p>
                <p><b>Email:</b></p>
                    <a href="mailto:syareefa4@gmail.com">{{ email }}</a><br><br>
                <p><b>Linkedin:</b></p>
                <p>-</p>
            <h2 class="hp">Languages<hr></h2>
                <p>Javanese</p>
                <p>Indonesian</p>
                <p>English</p><br>
            <h2 class="hp">Hobbies<hr></h2>
            <ul>
                <li>{{ hobbies }}</li>
                <li>{{ hobbi }}</li>
            </ul>
        </nav>
        <article>
            <h2 class="hp">Summary<hr></h2>
            <p>Senior Web Developer specializing in front development.<br> Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerousm programming<br> languages including HTML5, PHP OOP, JavaScript, CSS, MySQL.<br> Strong background in project management and customer<br> relation</p><br>
            <!-- <p>{{ summary }}</p> -->
            <h2 class="hp">Skill Hightlights<hr></h2>
            <ul id="ul">
                <li>Project management</li>
                <li>Strong decision maker</li>
                <li>Complex problem<br> solver</li>
                <li>Creative design</li>
                <li>Innovative</li>
                <li>Service-focused</li>
            </ul><br>
            <h2 class="hp">Experience<hr></h2>
            <p><b>Web Developer</b>-09/2015 to 05/2019<br> <b>Luna Web Design</b>, New York</p>
            <ul>
                <li>Cooperate with designers to create clean interfaces and<br> simple, intuitive interaction and experiences.</li>
                <li>Develop project concepts and maintain optimal<br> workflow.</li>
                <li>Work with senior developer to manage large, complex<br> design project for corporatie clients.</li>
                <li>Complete detailed programming and development tasks<br> challenging back-end server code.</li>
                <li>Carry out quality assurance tests to discover errors and<br> optimize usability.<br></li>
            </ul><br>
            <h2 class="hp">Education<hr></h2>
            <p>Bachelor of Science: <b>Computer Information Systems</b> - 2014<br> <b>Columbia University</b>, NY</p><br>
            <h2 class="hp">Certifications<hr></h2>
            <p>PHP Framework (certificate): <b>Zend, Codeigniter, Symfony.</b><br>Programming Languages: <b>JavaScript, HTML5, PHP OOP, CSS,<br> SQL, MySQL</b></p>
        </article>
    </div>
</template>
<script>
export default {
    name: 'cv1',
    computed: {
        project() {
            return this.$store.state.listProject;
        }
    }
}
</script>