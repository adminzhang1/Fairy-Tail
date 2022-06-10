window.addEventListener('load',function(){
	//刷新自动回到顶部
	setTimeout(function(){
		window.scrollTo(0,0);
	},10)
	// nav导航
	var nav=document.querySelector('.nav-list');
	var navLis=document.querySelectorAll('.nav-list>li');
	navLis[0].classList.add('on');
	nav.addEventListener('mouseout',function(){
		for(var i=0;i<navLis.length;i++){
			navLis[i].classList.remove('on');
		}
		navLis[0].classList.add('on');
	})
	for(var i=0;i<navLis.length;i++){
		navLis[i].addEventListener('mouseover',function(){
			for(var i=0;i<navLis.length;i++){
				navLis[i].classList.remove('on');
			}
			this.classList.add('on');
		})
	}
	// 二维码显隐
	var community=document.querySelector('.community');
	var navSelectList=community.querySelector('.nav-select-list');
	var navSelectList_img=navSelectList.querySelectorAll('li img');
	var wxQrNav=document.querySelector('.wxQrNav');
	var wxYxqNav=document.querySelector('.wxYxqNav');
	var service=document.querySelector('.service');
	var kfQr=document.querySelector('.kfQr');
	community.addEventListener('mouseover',function(){
		navSelectList.style.display='block';
	})
	community.addEventListener('mouseout',function(){
		navSelectList.style.display='none';
	})
	wxQrNav.addEventListener('mouseover',function(){
		navSelectList_img[0].style.display='block';
	})
	wxQrNav.addEventListener('mouseout',function(){
		navSelectList_img[0].style.display='none';
	})
	wxYxqNav.addEventListener('mouseover',function(){
		navSelectList_img[1].style.display='block';
	})
	wxYxqNav.addEventListener('mouseout',function(){
		navSelectList_img[1].style.display='none';
	})
	service.addEventListener('mouseover',function(){
		kfQr.style.display='block';
	})
	service.addEventListener('mouseout',function(){
		kfQr.style.display='none';
	})
	// 遮罩层
	var childtips=document.querySelector('.childtips');
	var overlay=document.querySelector('#_overlay');
	var showTips=document.getElementById('showTips');
	var closeDia=document.querySelector('.closeDia');
	childtips.addEventListener('click',function(){
		overlay.style.display='block';
		showTips.style.display='block';
	})
	closeDia.addEventListener('click',function(){
		overlay.style.display='none';
		showTips.style.display='none';
	})
	//新闻
	var newsLis=document.querySelectorAll('.topTab ul li');
	var newsPanels=document.querySelectorAll('.bottomTab .tab-panel');
	newsLis[0].classList.add('on');
	newsPanels[0].classList.add('dis');
	for(var i=0;i<newsLis.length;i++){
		newsLis[i].addEventListener('mouseover',function(){
			for(var i=0;i<newsLis.length;i++){
				newsLis[i].classList.remove('on');
			}
			for(var j=0;j<newsPanels.length;j++){
				newsPanels[j].classList.remove('dis');
			}
			this.classList.add('on');
			newsPanels[this.getAttribute('data-index')].classList.add('dis');
		})
	}
	//新闻轮播图
	var index=0;
	var newsNav=document.querySelector('.news-nav');
	var newsSwiper=document.querySelectorAll('.swiper-pagination-switch');
	var timer1=setInterval(function(){
		if(index>1){
			index=0;
		}
		newsNav.style.left='-'+(index*100)+'%';
		for(var i=0;i<newsSwiper.length;i++){
			newsSwiper[i].classList.remove('swiper-active-switch');
		}
		newsSwiper[index].classList.add('swiper-active-switch');
		index++;
	},1000)
	for(var i=0;i<newsSwiper.length;i++){
		newsSwiper[i].addEventListener('click',function(){
			index=this.getAttribute('data-index');
			newsNav.style.left='-'+(index*100)+'%';
			for(var i=0;i<newsSwiper.length;i++){
				newsSwiper[i].classList.remove('swiper-active-switch');
			}
			newsSwiper[index].classList.add('swiper-active-switch');
		})
	}
	//名录切换
	var mageTabs=document.querySelectorAll('.mageTab li');
	for(var i=0;i<mageTabs.length;i++){
		mageTabs[i].addEventListener('mouseover',function(){
			for(var i=0;i<mageTabs.length;i++){
				mageTabs[i].classList.remove('on');
			}
			this.classList.add('on');
		})
	}
	//人物头像切换
	var leftTab=document.querySelectorAll('.leftTab li');
	for(var i=0;i<leftTab.length;i++){
		leftTab[i].addEventListener('click',function(){
			for(var i=0;i<leftTab.length;i++){
				leftTab[i].classList.remove('on');
			}
			this.classList.add('on')
		})
	}
	//技能显隐
	var skillDetails=document.querySelectorAll('.skillDetails li');
	var skillDescList=document.querySelectorAll('.skillDescList li');
	for(var i=0;i<skillDetails.length;i++){
		skillDetails[i].addEventListener('mouseover',function(){
			for(var i=0;i<skillDescList.length;i++){
				skillDescList[i].classList.remove('on');
			}
			skillDescList[this.getAttribute('data-index')].classList.add('on');
		})
		skillDetails[i].addEventListener('mouseout',function(){
			for(var i=0;i<skillDescList.length;i++){
				skillDescList[i].classList.remove('on');
			}
		})
	}
	//小队
	var swiperSlideLis=document.querySelectorAll('.swiper-wrapper .swiper-slide li');
	for(var i=0;i<swiperSlideLis.length;i++){
		swiperSlideLis[i].addEventListener('click',function(){
			for(var i=0;i<swiperSlideLis.length;i++){
				swiperSlideLis[i].classList.remove('on');
			}
			this.classList.add('on');
		})
	}
	//指南
	var guideLists=document.querySelectorAll('.guideList li');
	for(var i=0;i<guideLists.length;i++){
		guideLists[i].addEventListener('click',function(){
			for(var i=0;i<guideLists.length;i++){
				guideLists[i].classList.remove('on');
			}
			this.classList.add('on');
			this.querySelector('.guide-list').style.opacity=1;
			document.querySelector('.guideList').style.width='1325px'
		})
	}
	//轮播图
	var feature=document.querySelector('.feature .center');
	var featurePrev=document.querySelector('.featurePrev');
	var featureNext=document.querySelector('.featureNext');
	feature.addEventListener('mouseover',function(){
		clearInterval(timer2);
		timer2=null;
	})
	feature.addEventListener('mouseout',function(){
		timer2=setInterval(function(){
			featureNext.click();
		},2000)
	})
	var focus=document.querySelector('.featureSwiper .swiper-wrapper');
	var focusLis=focus.querySelectorAll('li');
	var focusLiWidth=focus.querySelector('li').offsetWidth;
	var pagination=feature.querySelector('.pagination');
	for(var i=0;i<focusLis.length;i++){
		var spans=document.createElement('span');
		spans.setAttribute('data-nav-index',i+1);
		spans.classList.add('feature-pagination-nav');
		pagination.appendChild(spans);
		spans.addEventListener('click',function(){
			for(var i=0;i<pagination.children.length;i++){
				pagination.children[i].classList.remove('feature-pagination-navswitch');
			}
			this.classList.add('feature-pagination-navswitch');
			var index=this.getAttribute('data-nav-index');
			num=index;
			circle=index-1;
			animate(focus,-index*focusLiWidth);
		})
	}
	pagination.children[0].classList.add('feature-pagination-navswitch');
	var first=focus.children[0].cloneNode(true);
	var last=focus.children[focusLis.length-1].cloneNode(true);
	focus.appendChild(first);
	focus.insertBefore(last,focus.children[0]);
	var num=1;
	var circle=0;
	var flag=true;
	featureNext.addEventListener('click',function(){
		if(flag){
			flag=false;
			if(num>focusLis.length){
				num=1;
				focus.style.left=-num*focusLiWidth+'px';
			}
			num++;
			animate(focus,-num*focusLiWidth,function(){
				flag=true;
			})
			circle++;
			circle=circle==pagination.children.length?0:circle;
			circleChange();
		}
	})
	featurePrev.addEventListener('click',function(){
		if(flag){
			flag=false;
			if(num<1){
				num=5;
				focus.style.left=-num*focusLiWidth+'px';
			}
			num--;
			animate(focus,-num*focusLiWidth,function(){
				flag=true;
			})
			circle--;
			circle=circle<0?pagination.children.length-1:circle;
			circleChange();
		}
	})
	function circleChange(){
		for(var i=0;i<pagination.children.length;i++){
			pagination.children[i].classList.remove('feature-pagination-navswitch');
		}
		pagination.children[circle].classList.add('feature-pagination-navswitch');
	}
	var timer2=setInterval(function(){
		featureNext.click();
	},2000)
	//视听切换
	var leftTitle=document.querySelectorAll('.leftTitle li');
	var mediaMains=document.querySelector('.media-main');
	for(var i=0;i<leftTitle.length;i++){
		leftTitle[i].setAttribute('data-leftTitle-index',i);
		leftTitle[i].addEventListener('click',function(){
			for(var i=0;i<leftTitle.length;i++){
				leftTitle[i].classList.remove('on');
			}
			this.classList.add('on');
			var index=this.getAttribute('data-leftTitle-index');
			for(var i=0;i<mediaMains.children.length;i++){
				mediaMains.children[i].style.display='none';
			}
			mediaMains.children[index].style.display='block';
		})
	}
	//音乐
	var playBtn=document.querySelector('.playBtn');
	var point=document.querySelector('.point');
	var recordImg=document.querySelector('.recordImg');
	var swtch=false;
	var deg=0;
	var timer3=null;
	playBtn.addEventListener('click',function(){
		if(swtch){
			this.classList.remove('pause');
			point.classList.remove('on');
			clearInterval(timer3);
			timer3=null;
			swtch=false;
		}else{
			this.classList.add('pause');
			point.classList.add('on');
			timer3=setInterval(function(){
				recordImg.style.transform='rotate('+(deg+=0.5)+'deg)';
			},15);
			swtch=true;
		}
	})
	//收回右侧大导航
	var rightNav=document.getElementById('rightNav');
	var back=document.querySelector('.back');
	var back_on=true;
	back.addEventListener('click',function(){
		if(back_on){
			rightNav.classList.add('on');
			back.classList.add('on');
			back_on=false;
		}else{
			rightNav.classList.remove('on');
			back.classList.remove('on');
			back_on=true;
		}
	})
	//侧边栏切换
	var kv_nav=document.querySelector('.kv-nav');
	window.addEventListener('scroll',function(){
		if(window.pageYOffset>=400){
			kv_nav.style.display='none';
			rightNav.style.display='block';
		}else{
			kv_nav.style.display='block';
			rightNav.style.display='none';
		}
	})
	//zoom
	rightNav.style.zoom=document.documentElement.clientHeight/940;
	window.addEventListener('resize',function(){
		rightNav.style.zoom=document.documentElement.clientHeight/940;
	})

	//返回顶部
	var toTop=document.querySelector('.toTop');
	toTop.addEventListener('click',function(){
		window_animate(window,0);
	})
	function window_animate(obj,target,callback){
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			var step=(target-window.pageYOffset)/10;
			step=step>0?Math.ceil(step):Math.floor(step);
			if(window.pageYOffset==target){
				clearInterval(obj.timer);
				callback&&callback();
			}
			window.scroll(0,window.pageYOffset+step);
		},10)
	}
	//右侧导航
	var news=document.getElementById('news').offsetTop;
	var magrOriginal=document.getElementById('magrOriginal').offsetTop;
	var assist=document.getElementById('assist').offsetTop;
	var guide=document.getElementById('guide').offsetTop;
	var featurePart=document.getElementById('featurePart').offsetTop;
	var media=document.getElementById('media').offsetTop;
	var rightNav_list=rightNav.querySelector('.rightNav-list');
	window.addEventListener('scroll',function(){
		if(window.pageYOffset>=media){
			clearOn(rightNav_list,5,'on');
		}else if(window.pageYOffset>=featurePart){
			clearOn(rightNav_list,4,'on');
		}else if(window.pageYOffset>=guide){
			clearOn(rightNav_list,3,'on');
		}else if(window.pageYOffset>=assist){
			clearOn(rightNav_list,2,'on');
		}else if(window.pageYOffset>=magrOriginal){
			clearOn(rightNav_list,1,'on');
		}else if(window.pageYOffset>=news){
			clearOn(rightNav_list,0,'on');
		}else{
			for(var i=0;i<rightNav_list.children.length;i++){
				rightNav_list.children[i].classList.remove('on');
			}
		}
	})
	function clearOn(obj,index,cls){
		for(var i=0;i<obj.children.length;i++){
			obj.children[i].classList.remove(cls);
		}
		obj.children[index].classList.add(cls);
	}
	//
	var rightNav_list_child=rightNav_list.querySelectorAll('li');
	console.log(rightNav_list_child);
	for(var i=0;i<rightNav_list_child.length;i++){
		rightNav_list_child[i].setAttribute('data-index',i);
		rightNav_list_child[i].addEventListener('mouseover',function(){
			for(var i=0;i<rightNav_list_child.length;i++){
				rightNav_list_child[i].classList.remove('on');
			}
			this.classList.add('on')
		})
		rightNav_list_child[i].addEventListener('mouseout',function(){
			if(window.pageYOffset>=media){
				clearOn(rightNav_list,5,'on');
			}else if(window.pageYOffset>=featurePart){
				clearOn(rightNav_list,4,'on');
			}else if(window.pageYOffset>=guide){
				clearOn(rightNav_list,3,'on');
			}else if(window.pageYOffset>=assist){
				clearOn(rightNav_list,2,'on');
			}else if(window.pageYOffset>=magrOriginal){
				clearOn(rightNav_list,1,'on');
			}else if(window.pageYOffset>=news){
				clearOn(rightNav_list,0,'on');
			}else{
				for(var i=0;i<rightNav_list.children.length;i++){
					rightNav_list.children[i].classList.remove('on');
				}
			}
		})
		rightNav_list_child[i].addEventListener('click',function(){
			var index=this.getAttribute('data-index');
			switch(index){
				case '0':
					for(var i=0;i<rightNav_list_child.length;i++){
						rightNav_list_child[i].classList.remove('on');
					}
					rightNav_list_child[index].classList.add('on');
					window_animate(Window,news);break;
				case '1':
					for(var i=0;i<rightNav_list_child.length;i++){
						rightNav_list_child[i].classList.remove('on');
					}
					rightNav_list_child[index].classList.add('on');
					window_animate(Window,magrOriginal);break;
				case '2':
					for(var i=0;i<rightNav_list_child.length;i++){
						rightNav_list_child[i].classList.remove('on');
					}
					rightNav_list_child[index].classList.add('on');
					window_animate(Window,assist);break;
				case '3':
					for(var i=0;i<rightNav_list_child.length;i++){
						rightNav_list_child[i].classList.remove('on');
					}
					rightNav_list_child[index].classList.add('on');
					window_animate(Window,guide);break;
				case '4':
					for(var i=0;i<rightNav_list_child.length;i++){
						rightNav_list_child[i].classList.remove('on');
					}
					rightNav_list_child[index].classList.add('on');
					window_animate(Window,featurePart);break;
				case '5':
					for(var i=0;i<rightNav_list_child.length;i++){
						rightNav_list_child[i].classList.remove('on');
					}
					rightNav_list_child[index].classList.add('on');
					window_animate(Window,media);break;
				default:break;
			}
		})
	}
	//头部小事件
	var ost_g=document.getElementById('ost_g');
	var ost_d=document.getElementById('ost_d');
	ost_g.addEventListener('mouseover',function(){
		ost_g.style.display='none';
		ost_d.style.display='block';
	})
	ost_d.addEventListener('mouseout',function(){
		ost_g.style.display='block';
		ost_d.style.display='none';
	})
})