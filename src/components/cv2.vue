<template>
    <div class="ass">
        <header>
            <h2 class="nm"><img src="kpop.jpg">Layla Robi'atus Syarifah</h2>
        </header><br>
        <div id="bio"><br><br>
            <h4>PROFILE<hr></h4>
                <h6>NAME</h6>
                    <p>{{ name }}</p>
                <h6>DATE OF BIRTH</h6>
                    <p>13 October 2005</p>
                <h6>ADDRESS</h6>
                    <p>{{ address }}</p>
                <h6>WEBSITE</h6>
                    <p>-</p>
            <h4>AWARDS<hr></h4>
                <h6>CREATIVE AWARDS 2012</h6>
                    <p>Openminded.org</p>
                <h6>INTERFACE DESIGN 2013</h6>
                    <p>Coolideas.com</p>
            <h4>CONTACT<hr></h4>
                <h6>HOME NUMBER</h6>
                    <p>-</p>
                <h6>PHONE NUMBER</h6>
                    <p>0895 6221 8924 2</p>
                <h6>EMAIL</h6>
                    <p>{{ email }}</p>
            <h4>SOCIAL<hr></h4>
                <h6>TWITTER</h6>
                    <p>-</p>
                <h6>INSTAGRAM</h6>
                    <p>@lyl.syarifah</p>
                <h6>FACEBOOK</h6>
                    <p>-</p>
        </div>
        <div class="knn">
            <h4>GRAPHIC ARTIST</h4><hr id="hr">
                <div id="articel">
                <h4>WORK EXPERIENCE<hr></h4><br>
                    <h6>CREATIVE ROOMS</h6>
                    <p>Feb 2013 - Jun 2014</p><br><br>
                    <h6>CREATIVE ROOMS</h6>
                    <p>Feb 2013 - Jun 2014</p><br><br>
                    <h6>CREATIVE ROOMS</h6>
                    <p>Feb 2013 - Jun 2014</p><br><br><br><br><br><br>
                    <br><br><h6>SENIOR ART DIRECTOR</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat id neque amet in ducimus facere facilis consequatur, officiis temporibus cumque itaque, aut rerum, est asperiores. Obcaecati ab dolore nobis ex.</p>
                    <h6>SENIOR ART DIRECTOR</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat id neque amet in ducimus facere facilis consequatur, officiis temporibus cumque itaque, aut rerum, est asperiores. Obcaecati ab dolore nobis ex.</p>
                    <h6>SENIOR ART DIRECTOR</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat id neque amet in ducimus facere facilis consequatur, officiis temporibus cumque itaque, aut rerum, est asperiores. Obcaecati ab dolore nobis ex.</p>                
                </div><br> 
                
                <div id="tikel">
                <h4>EDUCATION<hr></h4><br>
                    <h6>MASTER DEGREE</h6>
                    <p>Feb 2011 - Jun 2014</p>
                    <h6>MASTER DEGREE</h6>
                    <p>Feb 2011 - Jun 2014</p>
                    <h6>MASTER DEGREE</h6>
                    <p>Feb 2011 - Jun 2014</p><br><br><br>
                    <h6>UNIVERSITY OF CREATIVE MINDS</h6>
                    <p>Jakarta, Indonesia</p>
                    <h6>UNIVERSITY OF CREATIVE MINDS</h6>
                    <p>Jakarta, Indonesia</p>
                    <h6>UNIVERSITY OF CREATIVE MINDS</h6>
                    <p>Jakarta, Indonesia</p>
                </div>
        </div>
        <!-- <div class="puter">
            <footer>footer</footer>
        </div> -->
    </div>
</template>
<script>
export default {
    name: 'cv2',
    computed: {
        project() {
            return this.$store.state.listProject;
        }
    }
}
</script>