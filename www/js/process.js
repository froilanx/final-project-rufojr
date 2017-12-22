// <video width="320" height="240" controls>
//   <source src="movie.mp4" type="video/mp4">
//   <source src="movie.ogg" type="video/ogg">
//   Your browser does not support the video tag.
// </video>

let process = {
	menu:function(){
		
		let content = <div>
		    <h1 align='center'>DIFFERENT FLOWERS</h1>
		    <div align='center'>
						<img src='img/MILKY-WAY.jpg' width='100px' height='50px' />
			<audio id="audio_bomb">
				<source src="audio/bomb.mp3" type="audio/mp3" />
			</audio>
			<div>
			<p class="buttons-row">
				<a href='#' class=" button button-fill color-yellow"  onClick={process.page1}>RAFLESIA</a>
				<a href='#' class=" button button-fill color-yellow"  onClick={process.page2}>SAMPAGUITA</a>
				<a href='#' class=" button button-fill color-yellow" onClick={process.page3}>CHRYSANTHEMUM</a>
				<a href='#' class=" button button-fill color-yellow" onClick={process.page10}>GLADIOLI</a>
				<a href='#' class=" button button-fill color-yellow" onClick={process.page11}>GLADIOLI</a>
				
			</p>
			<p class="buttons-row">
				<a href='#' class=" button button-fill color-yellow" onClick={process.page6}>ANTHURIUM</a>
				<a href='#' class=" button button-fill color-yellow" onClick={process.page4}>ROSES</a>
				<a href='#' class=" button button-fill color-yellow" onClick={process.page7}>orchids</a>
				<a href='#' class=" button button-fill color-yellow" onClick={process.page8}>LILIES</a>
				<a href='#' class=" button button-fill color-yellow" onClick={process.page9}>CARNATION</a>
				</p>
				<p class="buttons-row">
				<a href='#' class=" button button-fill color-yellow" onClick={process.page12}>ROSES</a>
				</p>
				</div>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div>
				<h2 align='center' >RAFLESIA</h2>
				<p class="buttons-row" width="80px" height="50px">
				<a href='#'  class="button button-fill color-blue"  onClick={process.menu}>BACK</a>
				</p>
				<div align='center'>
						<img src='img/'RAFLESIA.jpg width='100px' height='50px' />

				<p align='center'>

					  <div>is considers as biggest flower not only in the Philippines</div>
					  <div>but in the world. Flowers measure 8 to 39 inches in diameter. </div>
					 <div> Its color is red dotted with white and has a foul odor wherein</div>
					   <div>you may smell it before you can see it. </div>
					</p>
				</div>

			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page2:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>SAMPAGUITA</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
				<div align='center'>
						<img src='img/SAMPAGUITA.jpg' width='100px' height='50px' />
					<p align='center'>
						<div>(Jasminum Sambac) is much respected because it is the national flower</div>
						 <div>of the Philippines. The fragrant white flower has a sweet scent in</div>
						  <div>tropical climate that use in making perfume.</div>
						   <div>It is very popular in making garlands. It is </div>
					</p>
				</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page3:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>CHRYSANTHEMUM</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue"onClick={process.menu}>BACK</a>
				</p>
				<div align='center'>
						<img src='img/CHRYSANTHEMUM.jpg' width='100px' height='50px' />

					<p align='center'>
						 <div>is native to Asia and is the easiest to grow plants</div>
						  <div>and produce more flowers. It can plant almost anytime.</div>
						   <div>It needs more moisture. It has many great varieties of colors.    </div>           
					</p>
				</div>

			</div>;

			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page4:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>GLADIOLI </h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/GLADIOLI.jpg' width='100px' height='50px' />
					<p align='center'>
						 <div>grow depends on the temperature climate.</div>
						 <div> It is form rounded on its stem is sword-shaped </div>
						  <div>that use in tall arrangement decoration. </div>                        
					</p>	
					</div>

				</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

page6:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>GLADIOLI</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/GLADIOLI.jpg' width='100px'  height='50px' />
					<p align='center'>
						<div>grow depends on the temperature climate.</div>
						 <div> It is form rounded on its stem is sword-shaped </div>
						  <div>that use in tall arrangement decoration.  </div>
					</p>
			</div>

				</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page7:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>ANTHURIUM</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/ANTHURIUM.jpg' width='100px' height='50px' />
					<p align='center'>
					 <div>is a heart shape flower which is also known as “Flamingo Flower”.</div>
					  <div>This kind of flower is sparkling and almost looks like plastic.</div>
					   <div>It can last for four weeks in your flower arrangement.  </div>      
					</p>

				</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
page8:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>ROSES</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/ROSES.jpg' width='100px' height='50px' />
					<p align='center'>
						 <div>are symbolizes love and it is considered as flower of love.</div>
						  <div>The ancient Greeks and Romans was associated it with Aphrodite,</div>
						  <div> the goddesses of love. That’s why roses are gift to our love ones</div>
						    <div>in special occasion specially Valentine’s Day</div>
						
					</p>

				</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page9:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>ORCHIDS</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/ORCHIDS.jpg' width='100px' height='50px' />
						<div>are attractive and very different from other flowers.</div>
						 <div>The orchids produce more flowers in one stem. They symbolize </div>
						 <div>elegance and beauty. It is use as decoration on special events </div>
						 <div>like weddings. Orchids have many hybrids that introduce in </div>
						 <div>different country. They can grow anywhere because they are terrestrial </div>
						 <div>plants or epiphytic plants (plants that grow on other plants). </div>              
							
							</p>


</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

page10:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>LILIES</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/NEPTUNE.jpg' width='100px' height='50px' />
						<p align='center'>
						 <div>are trumpet in shape that can grow up
						  <div>to 6 inches in diameter. Lilies are usually composed </div>
						  <div>of six simple petals.  Lilies symbolize death so they are</div>
						   <div>found in funeral flowers. They are belongs to the family of Liliums. </div>
						   <div>Lilies are magnificent flowers that catch attention because</div>
						    <div>of fragrance they produce.</div>
						</p>


</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page11:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>CARNATION</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/PLUTO.jpg' width='100px' height='50px' />
						<p align='center'>
						<div>is also known as “The Flowers of God”.
						 <div>It is about two to three inches featuring several flowers</div>
						  <div>in one stem with huge range of colors like white, red, pink, </div>
						  <div>fuchsia and yellow. The cut flowers can live up to three weeks. </div>
						</p>

</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page12:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>ROSES</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
				<div align='center'>
						<img src='img/MILKY-WAY.jpg' width='100px' height='50px' />
					<p align='center'>
						 <div>are symbolizes love and it is considered as flower of love.</div>
						  <div>The ancient Greeks and Romans was associated it with Aphrodite,</div>
						   <div>the goddesses of love. That’s why roses are gift to our love </div>
						   <div>ones in special occasion specially Valentine’s Day. </div>
						</p>

</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},



	loading:function(){
		let content = <div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					
					<audio id="audio">
						<source src="audio/bomb.mp3" type="audio/mp3" />
					</audio>
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio').play();
		process.replayAudio('audio');
	},
	audio:function(audio){
		let _audio = document.getElementById(audio);
		return _audio;
	},
	replayAudio:function(audio){
		process.audio(audio).addEventListener('ended',function(){
			process.audio('audio').pause();
			process.audio(audio).play();
		})
	}
}

let counting = 0;
process.loading();
setTimeout(function(){
	process.audio('audio').pause();
	process.menu();
},5000);