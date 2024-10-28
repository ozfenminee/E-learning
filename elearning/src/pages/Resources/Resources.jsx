import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar';

export const Resources = () => {
  return (
    <>
   <Navbar/>
   <div className='min-h-screen bg-yellow-100'>
   
  <h2 className="text-3xl font-bold text-center mb-8">Kaynaklar</h2>
  
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
   
    <div className="bg-yellow-500 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-3 text-indigo-600">Dökümanlar ve E-Kitaplar</h3>
      <p className="mb-4 text-gray-600">HTML, CSS ve JavaScript gibi konularda kapsamlı bilgi ve dökümanlar:</p>
      <ul className="space-y-2">
        <li>
          <a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            MDN Web Docs
          </a> - HTML, CSS ve JavaScript için detaylı dökümanlar.
        </li>
        <li>
          <a href="https://eloquentjavascript.net/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Eloquent JavaScript
          </a> - JavaScript öğrenmek için ücretsiz bir e-kitap.
        </li>
      </ul>
    </div>

 
    <div className="bg-yellow-500 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-3 text-indigo-600">Araçlar ve Uygulamalar</h3>
      <p className="mb-4 text-gray-600">Kod yazma ve sürüm kontrolü için kullanışlı araçlar:</p>
      <ul className="space-y-2">
        <li>
          <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Visual Studio Code
          </a> - Kod yazmak için popüler bir IDE.
        </li>
        <li>
          <a href="https://www.git-scm.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Git
          </a> - Sürüm kontrolü için vazgeçilmez bir araç.
        </li>
      </ul>
    </div>

   
    <div className="bg-yellow-500 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-3 text-indigo-600">Kodlama Ortamları</h3>
      <p className="mb-4 text-gray-600">Kodlarınızı doğrudan çalıştırabileceğiniz online ortamlar:</p>
      <ul className="space-y-2">
        <li>
          <a href="https://codepen.io/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            CodePen
          </a> - HTML, CSS ve JavaScript kodlarını hızlıca deneyin.
        </li>
        <li>
          <a href="https://jsfiddle.net/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            JSFiddle
          </a> - JavaScript projeleri için etkileşimli bir ortam.
        </li>
      </ul>
    </div>

    
    <div className="bg-yellow-500 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-3 text-indigo-600">Ödevler ve Pratik Alıştırmalar</h3>
      <p className="mb-4 text-gray-600">Kodlama becerilerinizi geliştirmek için pratik yapabileceğiniz platformlar:</p>
      <ul className="space-y-2">
        <li>
          <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            LeetCode
          </a> - Kodlama becerilerinizi geliştirin.
        </li>
        <li>
          <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            HackerRank
          </a> - Kodlama ve algoritma pratikleri.
        </li>
      </ul>
    </div>


    <div className="bg-yellow-500 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-3 text-indigo-600">Yardımcı Rehber Videolar</h3>
      <p className="mb-4 text-gray-600">Kapsamlı rehberler ve öğretici videolar:</p>
      <ul className="space-y-2">
        <li>
          <a href="https://www.youtube.com/c/Academind" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Academind YouTube Kanalı
          </a> - Web geliştirme ve programlama rehberleri.
        </li>
        <li>
          <a href="https://www.youtube.com/c/TraversyMedia" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Traversy Media
          </a> - Full stack geliştirme videoları.
        </li>
      </ul>
    </div>

    <div className="bg-yellow-500 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-3 text-indigo-600">İlham Veren Hikayeler ve Bloglar</h3>
      <p className="mb-4 text-gray-600">Yazılım dünyasından ilham veren hikayeler ve bloglar:</p>
      <ul className="space-y-2">
        <li>
          <a href="https://dev.to/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            DEV Community
          </a> - Yazılımcılar için topluluk paylaşımları.
        </li>
        <li>
          <a href="https://medium.com/tag/programming" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Medium - Programming
          </a> - Geliştiricilerin yazıları ve deneyimleri.
        </li>
      </ul>
    </div>
  </div>
</div>

   </>
  )
}
export default Resources;