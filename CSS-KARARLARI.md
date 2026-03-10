# CSS Kararları

## 1. Breakpoint Secimi
- Neden 640px ve 1024px sectim?: Bu değerler mobil, tablet ve masaüstü donanımlara karşılık gelen standart web tasarım kırılım noktalarıdır.
- Icerigim bu noktalarda nasil degisiyor?: 0-639px arasında Navbar, projeler ve form alt alta yığın (column) şeklinde diziliyor. 640px ve üzeri cihazlarda (Tablet) navigasyon yatay olurken, kartlar yan yana esnek grid düzenine (fluid grid) giriyor. 1024px üzerinde ise içerik merkeze alınıyor ve geniş yayılan `hero` bileşenleri yan yana konumlanıyor.

## 2. Layout Tercihleri
- Header icin neden Flexbox sectim?: Header içindeki logo ve `nav` bileşenleri arasındaki boşluğu `space-between` ile kolayca yönetebilmek, menüyü yatayda kolay hizalayabilmek için Flexbox idealdir.
- Proje kartlari icin neden Grid sectim?: İki boyutlu (hem satır hem de sütun) bir düzende eşit boyutlandırılan, kendi aralarında otomatik boşuk (gap) bırakan duyarlı bir ızgara oluşturmak için CSS Grid daha yapısal ve güçlüdür.
- auto-fit mi auto-fill mi kullandim , neden?: `auto-fit` kullandım. `repeat(auto-fit, minmax(280px, 1fr))` sayesinde boş alan kaldığında öğelerin o alanı esnek (1fr) biçimde kapmasını ve doldurmasını sağlıyor, bu da responsive geçişlerde sayfanın dolu görünmesini garanti ediyor.

## 3. Design Tokens
- Hangi renk paletini sectim ve neden?: Daha modern ve premium bir his vermesi için "Dark Theme" paletini benimsedim (Örneğin `--color-bg: #0f172a`). Ön plana çıkarmak istediğim detaylarda (butonlar, vurgular vb.) turkuaz ve mor geçişler kullanarak kontrast sağladım.
- Spacing skalasini nasil belirledim?: Tasarımda tutarlılığı ve modülerliği desteklemek için `--space-xs` (0.25rem = 4px) değerinden başlayarak, x2 artan klasik 8PT (`--space-sm: 8px`, `--space-md: 16px` vs.) kuralına dayalı orantısal bir dizi seçtim. 
- Fluid typography icin clamp degerlerini nasil ayarladim?: `clamp()` içerisinde vw (viewport width) oranlarını dahil ettim. Örneğin `--text-base` için `clamp(1rem, 0.9rem + 0.5vw, 1.125rem)` tanımladım. Bu sayede yazılar, en küçükte 1rem (16px) değerinin altına düşmeden, tarayıcının genişliğine göre yavaş yavaş ve orantılı büyüyebildi.

## 4. Responsive Stratejiler
- Mobile-first yaklasimini nasil uyguladim?: Süreç boyunca `@media` etiketleri içermeyen "root / temel" tasarımım aslında mobil boyutu hedefliyor. Aşağı indikçe `@media (min-width: ...)` ile daha geniş ekranlar için "üzerine inşa edilen" ek ayarlamalar yaptım.
- Hangi elemanlar breakpoint 'lerde degisiyor?: Menü yatay düzlüğe geçiriliyor, "Hakkımda" sekmesindeki yazı ve görsel alt-alta durumundan yan yana tasarıma dönüşüyor, projedeki "Grid" sütun sayısı dinamik olarak hesaplanarak yan yana daha fazla kart sıralanıyor.
- Gorsel boyutlari nasil yonettim?: Uygulamadaki resimlerin taşmasını veya deforme olmasını engellemek için genel ayarlarda `max-width: 100%;` ve yüksekliğe sınırlı yerlerde estetiği bozmaması için `object-fit: cover` ve `aspect-ratio` tanımlamalarını kullandım.
