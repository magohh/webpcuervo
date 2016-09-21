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

        <div class="map-wrap iframe-cont">
            <div class="overlay" onClick="style.pointerEvents='none'"></div><!-- wrap map iframe to turn off mouse scroll and turn it back on on click -->
           <div id="map"></div>
        </div>
        
       <div class="footer-inner <?php if(get_option($sr_prefix.'_footerlayout') !== 'column') { ?>align-center<?php } ?> wrapper">
            
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

            <!--<form><input type="email" required data-parsley-type-message="La dirección de correo es inválida." data-parsley-required-message="El correo es obligatorio."/>
            	<input type="submit" value="Submit">
            </form>-->

            <div id="openModal" class="modalDialog">
                <div>   <a href="#close" title="Close" class="close">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/files/images/close.png"></a>
					<section>
						<form id="theForm" class="simform" autocomplete="off">
							<div class="simform-inner">
								<ol class="questions">
									<li>
                                        <?php if( 'es' == $lang ) : ?>
    										<span><label for="q1">Queremos conocerte mejor, ¿cómo te llamas?</label></span>
    										<input id="q1" name="q1" type="text"/>
                                        <?php else : ?>
                                            <span><label for="q1">We want to meet you better, what's your name ?</label></span>
                                            <input id="q1" name="q1" />
                                        <?php endif; ?>  
									</li>
									<li>
                                        <?php if( 'es' == $lang ) : ?>
    										<span><label for="q2">Necesitamos tu email para estar en contacto</label></span>
    										<input  type="email" id="q2" class=".q2" name="q2"  data-validate="email" />
                                        <?php else : ?>
                                            <span><label for="q2">We need your email to stay in touch</label></span>
                                           <input type="email" id="q2" class="q2"  name="q2"  data-validate="email" />
                                        <?php endif; ?> 
									</li>
									<li>
                                        <?php if( 'es' == $lang ) : ?>
    										<span><label for="q3">Cuéntanos un poco sobre tu proyecto</label></span>
    										<input id="q3" name="q3" type="text"/>
                                        <?php else : ?>
                                            <span><label for="q3">Tell us about your project</label></span>
                                            <input id="q3" name="q3" type="text"/>
                                        <?php endif; ?> 
								</li>
									<li>
                                        <?php if( 'es' == $lang ) : ?>
    										<span><label for="q4">¿Cuál es tu presupuesto?</label></span>
    										<input id="q4" name="q4" type="text"/>
                                        <?php else : ?>
                                            <span><label for="q4">What is your budget?</label></span>
                                            <input id="q4" name="q4"  type="text"/>
                                        <?php endif; ?> 
									</li>
								</ol><!-- /questions -->
								<button class="submit" type="submit">Send answers</button>
								<div class="controls">
									<button class="next-button"></button>
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