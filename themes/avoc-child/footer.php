<?php 
$lang = isset( $_GET['lang'] ) ? $_GET['lang'] : 'es';
global $sr_prefix;
$theId = sr_getId();

?>
	<?php if ( !is_404() ) { ?>
    
    	
	</div> <!-- END #page-body -->
	<!-- PAGEBODY -->
	
    <!-- FOOTER --> 
 	<footer<?php if(get_option($sr_prefix.'_footercolor') == 'dark') { ?> class="footer-dark text-light"<?php } ?>>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22890686.75573349!2d-96.21416883667936!3d35.34040077695424!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x17490f0c276aca1b!2sPeque%C3%B1o+Cuervo!5e0!3m2!1sen!2smx!4v1473776082170" display=block width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
       <div class="footer-inner <?php if(get_option($sr_prefix.'_footerlayout') !== 'column') { ?>align-center<?php } ?> wrapper">
       <div>

            <?php echo do_shortcode('[ank_google_map]'); ?>
            
            <div class="column-section clearfix">
                <div class="column-one">
                    <h5 class="text-green"><strong>HELLO@PCUERVO.COM</strong></h5>
                </div>
            </div>
            <div class="column-section clearfix">
                <div class="column-two">
                    <h6 class="margin-horizontal-10">

                    MÉXICO

                    01152 4336 7589
                    Agrarismo 52, Col. Escandón, Miguel Hidalgo, D.F., México. 11800</h6>
                </div>
                <div class="column-two">
                    <h6 class="margin-horizontal-10">

                    CÁNADA

                    520 Charest Est, Suite 390, G1K 3J3, Québec, QC, Canada</h6>
                </div>
            </div>
            <?php if(get_option($sr_prefix.'_footerlayout') !== 'column') { ?>
            <?php if ( is_active_sidebar( 'footer-left' ) ) { dynamic_sidebar('Footer'); } ?>
            <?php } else { ?>
            <div class="column-section clearfix">
            	<div class="column one-half">
                <?php if ( is_active_sidebar( 'footer-left' ) ) { dynamic_sidebar('Footer'); } ?>
              	</div>
              	<div class="column one-half align-right last-col">
                <?php if ( is_active_sidebar( 'footer-right' ) ) { dynamic_sidebar('Footer (right)'); } ?>
              	</div>
            </div>
            <?php } ?>
            

            <?php if (!get_option($sr_prefix.'_disablebacktotop')) { ?>
                <?php if( 'es' == $lang ) : ?>
                    <a id="backtotop" href="#"><?php _e( 'Regresar', 'sr_avoc_theme' ) ?></a>
                <?php else : ?>
                    <a id="backtotop" href="#"><?php _e( 'Back To Top', 'sr_avoc_theme' ) ?></a>
                <?php endif; ?>  

                <?php } ?>

            <div id="openModal" class="modalDialog">
                <div>   <a href="#close" title="Close" class="close">X</a>
					<section>
						<form id="theForm" class="simform" autocomplete="off">
							<div class="simform-inner">
								<ol class="questions">
									<li>
										<span><label for="q1">Queremos conocerte mejor, ¿cómo te llamas?</label></span>
										<input id="q1" name="q1" placeholder="Anda, dinos tu nombre sin pena :)" type="text"/>
									</li>
									<li>
										<span><label for="q2">Necesitamos tu email para estar en contacto</label></span>
										<input id="q2" name="q2" placeholder="Te juro que no mandaremos spam, es solo para contactarte." type="text"/>
									</li>
									<li>
										<span><label for="q3">Cuéntanos un poco sobre tu proyecto</label></span>
										<input id="q3" name="q3" placeholder="Necesitamos un poquito mas de información :P" type="text"/>
									</li>
									<li>
										<span><label for="q4">¿Cuál es tu presupuesto?</label></span>
										<input id="q4" name="q4" placeholder="Puede ser un estimado. ¡Tratamos a todos nuestros clientes igual, no importa el presupuesto!" type="text"/>
									</li>
								</ol><!-- /questions -->
								<button class="submit" type="submit">Send answers</button>
								<div class="controls">
									<button class="next"></button>
									<div class="progress"></div>
									<span class="number">
										<span class="number-current"></span>
										<span class="number-total"></span>
									</span>
									<span class="error-message"></span>
								</div><!-- / controls -->
							</div><!-- /simform-inner -->
							<span class="final-message"></span>
						</form><!-- /simform -->
					</section>
                </div>
            </div>
        </div>
    </footer>
    <!-- FOOTER --> 
	
    <?php } ?>
    
</div> <!-- END #page-content -->
<!-- PAGE CONTENT -->

<?php wp_footer(); ?>

</body>
</html>