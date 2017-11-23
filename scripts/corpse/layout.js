function Layout(host)
{
  Corpse.call(this,host);

  // Header
  this.hd.appendChild(this.h1 = document.createElement('h1'));
  this.hd.appendChild(this.photo = document.createElement('photo'));
  this.hd.appendChild(this.logo = document.createElement('a'));
  this.hd.appendChild(this.search = document.createElement('input'));
  // Body
  this.md.appendChild(this.md_wr = document.createElement('wr'));
  this.md_wr.appendChild(this.m1 = document.createElement('m1'));
  this.md_wr.appendChild(this.m2 = document.createElement('m2'));
  // Footer
  this.fd.appendChild(this.fd_wr = document.createElement('wr'));

  this.start = function()
  {
    this.load(invoke.vessel.query());
  }

  this.load = function(key)
  {
    var term = this.host.lexicon.find(key) ; term.start();

    this.search.setAttribute("placeholder",term.parent.name+"/"+term.name)
    this.h1.innerHTML = term.bref;
    if(term.diaries[0]){
      this.photo.style.backgroundImage = "url(media/diary/"+term.diaries[0].photo+".jpg)";
    }
    this.md_wr.innerHTML = term.long;
    this.fd_wr.innerHTML = "<a href='' class='icon twitter'></a><a href='' class='icon github'></a><a href='' class='icon rotonde'></a><a href='' class='icon nataniev'></a><a href=''>Devine Lu Linvega</a> © 2006—2017<br/>BY-NC-SA 4.0<hr />";
  }
}

invoke.vessel.seal("corpse","layout");