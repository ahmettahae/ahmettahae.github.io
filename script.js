let currentUser = null;
let completionChart = null;
let categoryChart = null;

const quotes = [
    "Başlamak, bitirmenin yarısıdır.",
    "Gelecek, bugünden hazırlananlara aittir.",
    "Dün bitti, anın tadını çıkar.",
    "Disiplin, özgürlüktür.",
    "Asla pes etme, mucizeler her gün olur.",
    "Büyük başarılar, küçük adımlarla başlar."
];

//Dil 
const translations = {
    tr: {
        nav_home: "Ana Sayfa", nav_gallery: "Galeri", nav_about: "Hakkında", nav_contact: "İletişim", nav_profile: "Profil", nav_logout: "Çıkış",
        username: "Kullanıcı Adı", password: "Parola", login: "Giriş Yap", register: "Kayıt Ol", no_account: "Hesabın yok mu?", has_account: "Zaten hesabın var mı?", email: "E-posta", name: "Ad", surname: "Soyad", age: "Yaş", gender: "Cinsiyet", phone: "Telefon", select: "Seçiniz", female: "Kadın", male: "Erkek", other: "Diğer",
        chart_completion: "Tamamlanma Durumu", chart_category: "Kategori Dağılımı", my_goals: "Hedeflerim", new_goal: "+ Yeni Hedef",
        all_durations: "Tüm Süreler", daily: "Günlük", weekly: "Haftalık", monthly: "Aylık", indefinite: "Süresiz",
        all_categories: "Tüm Kategoriler", cat_health: "Sağlık", cat_sport: "Spor", cat_academic: "Akademik", cat_fun: "Eğlence", cat_personal: "Kişisel / Diğer",
        active_goals: "Devam Edenler", completed_goals: "Tamamlanmış Hedefler",
        success_gallery: "Başarı Galerisi", add_photo: "+ Fotoğraf Ekle", gallery_desc: "Hedeflerine ulaşırken anı biriktir.",
        contact_quote: "\"Gelişim, geri bildirimle başlar.\"", contact_desc: "Görüşleriniz önemlidir.", whatsapp_start: "WhatsApp Sohbeti Başlat", send_mail: "Mail Gönder", linkedin_connect: "Profesyonel Bağlantı Kur",
        write_to_me: "Bana Yazın", contact_subject: "Konu / Başlık", contact_message: "Mesajınız / Hikayeniz", send_message: "Gönder", message_sent: "Mesajınız başarıyla iletildi!",
        profile_info: "Profil Bilgileri", age_gender: "Yaş / Cinsiyet", update_info: "Bilgileri Güncelle", edit_profile: "Profil Düzenle", cancel: "İptal", save: "Kaydet",
        goal_title: "Başlık", category: "Kategori", select_color: "Renk Seçiniz:", duration: "Süre", description: "Açıklama",
        add_to_gallery: "Galeriye Ekle", related_goal: "İlgili Hedef", date: "Tarih", story: "Hikayesi", photo: "Fotoğraf",
        celebration_title: "TEBRİKLER! 🎉", celebration_msg: "Hedefi Tamamladın! +20 XP", celebration_close: "(Kapatmak için ekrana tıkla)",
        progress: "İlerleme", delete: "Sil",
        rank_novice: "Acemi", rank_apprentice: "Gelişen", rank_skilled: "Deneyimli", rank_expert: "Uzman", rank_legend: "Efsane",
        next_rank: "Sonraki rütbeye:", xp_left: "XP kaldı", completed: "Tamamlanan", ongoing: "Devam Eden",
        chart_info_total: "Toplam", chart_info_completed: "tamamlandı", chart_info_rate: "Başarı Oranı", chart_info_focus: "En çok odaklandığın alan", chart_info_none: "Henüz veri yok.",
        goal_type: "Hedef Tipi", target_value: "Hedef Değer", custom_unit: "Birim Adı",
        type_running: "Koşu", type_reading: "Kitap Okuma", type_travel: "Gezi", type_weight: "Kilo", type_water: "Su İçme",
        type_study: "Ders Çalışma", type_meditation: "Meditasyon", type_gym: "Spor Salonu", type_language: "Dil Öğrenme",
        type_movies: "Film İzleme", type_projects: "Proje", type_savings: "Para Biriktirme", type_steps: "Adım",
        type_sleep: "Uyku", type_coding: "Kod Yazma", type_custom: "Özel",
        about_title: "Kodların Ardındaki Hikâye",
        about_intro: "Merhaba, ben <strong>Ahmet Taha Erol</strong>.<br><br>Ankara Üniversitesi <strong>Bilgisayar Mühendisliği 3. sınıf öğrencisiyim</strong>. Hayatın yalnızca sınavlardan, ödevlerden ve not ortalamalarından ibaret olmadığına inananlardanım. Benim için asıl değerli olan; sabırla ilerlemek, istikrarlı büyümek ve her gün dünden biraz daha ileri gidebilmektir.<br><br>Bu platform, yalnızca bir web sitesi ya da sıradan bir proje değildir. Bu site; disiplinin, kararlılığın ve geleceği adım adım inşa etme arzusunun dijital bir yansımasıdır.",
        about_why_title: "Neden Bu Yola Çıktım?",
        about_why_text: "Zamanla şunu fark ettim: <strong>Gerçek başarı, büyük sıçramalarla değil; her gün atılan küçük ama kararlı adımlarla inşa ediliyor.</strong><br>Ancak insan zihni unutkandır. Harcanan emeği, uykusuz geceleri, vazgeçilmeyen hayalleri zamanla silikleştirir. İşte <strong>Goal Calendar</strong> tam olarak bu noktada doğdu: <em>Kendi gelişimimize şahitlik edebilmek için.</em>",
        about_what_title: "Goal Calendar Nedir?",
        about_what_text: "Goal Calendar; hedeflerinizi yalnızca yazıp unuttuğunuz bir takvim değil, ilerlemenizi görselleştiren, disiplininizi takip eden ve sizi motive eden kişisel bir yol arkadaşınızdır.<br>Burada:<br>• Günlük, haftalık ve uzun vadeli hedeflerinizi belirleyebilirsiniz.<br>• İlerlemenizi adım adım takip edebilirsiniz.<br>• Motivasyonun düştüğü anlarda, geriye dönüp ne kadar yol aldığınızı görebilirsiniz.<br>• Kendinize verdiğiniz sözleri daha somut hâle getirebilirsiniz.",
        about_meaning_title: "Bu Proje Benim İçin Ne İfade Ediyor?",
        about_meaning_text: "Bu proje benim için bir ödevden çok daha fazlası, bir kişisel gelişim haritası ve aynı zamanda gelecekteki mühendislik yolculuğumun da bir parçasıdır.<br>Kod yazarken yalnızca satırlar üretmedim; aynı zamanda sabır, düzen, problem çözme ve süreklilik alışkanlığı da inşa ettim. Çünkü biliyorum ki gerçek başarı, sadece teknik bilgiyle değil; karakterle de kazanılır.",
        about_vision_title: "Vizyonum",
        about_vision_text: "Ben geleceği yalnızca hayal eden değil, geleceği satır satır inşa etmeye çalışan bir mühendis olmak istiyorum.<br>Amacım; insanların hayatına dokunan, disiplini teşvik eden, üretkenliği artıran ve teknolojiyi gerçekten faydaya dönüştüren projeler üretmek. Goal Calendar bu yolculuktaki ilk büyük adımlarımdan biri.",
        about_coincidence_title: "Burada Olmanız Tesadüf Değil",
        about_coincidence_text: "Eğer siz de hedeflerinizi ertelemekten yorulduysanız, disiplin kurmakta zorlanıyorsanız, başladığınız işleri yarım bırakmak istemiyorsanız, doğru yerdesiniz.<br>Bu platform, yalnızca benim değil; kendini geliştirmek isteyen herkesin dijital yol arkadaşı olmak için var.",
        about_final_title: "Son Bir Not",
        about_final_text: "Unutmayın: Büyük hayatlar, küçük ama istikrarlı adımlarla kurulur.<br>Ve bazen sadece bir takvim, bir insanın hayatındaki en büyük dönüşümün başlangıcı olabilir."
    },
    en: {
        nav_home: "Dashboard", nav_gallery: "Gallery", nav_about: "About", nav_contact: "Contact", nav_profile: "Profile", nav_logout: "Logout",
        username: "Username", password: "Password", login: "Login", register: "Register", no_account: "No account?", has_account: "Already have an account?", email: "Email", name: "Name", surname: "Surname", age: "Age", gender: "Gender", phone: "Phone", select: "Select", female: "Female", male: "Male", other: "Other",
        chart_completion: "Completion Status", chart_category: "Category Distribution", my_goals: "My Goals", new_goal: "+ New Goal",
        all_durations: "All Durations", daily: "Daily", weekly: "Weekly", monthly: "Monthly", indefinite: "Indefinite",
        all_categories: "All Categories", cat_health: "Health", cat_sport: "Sport", cat_academic: "Academic", cat_fun: "Fun", cat_personal: "Personal / Other",
        active_goals: "Active Goals", completed_goals: "Completed Goals",
        success_gallery: "Success Gallery", add_photo: "+ Add Photo", gallery_desc: "Collect memories while achieving goals.",
        contact_quote: "\"Growth starts with feedback.\"", contact_desc: "Your feedback is valuable.", whatsapp_start: "Start WhatsApp Chat", send_mail: "Send Mail", linkedin_connect: "Connect Professionally",
        write_to_me: "Write to Me", contact_subject: "Subject / Title", contact_message: "Your Message / Story", send_message: "Send", message_sent: "Your message has been sent successfully!",
        profile_info: "Profile Info", age_gender: "Age / Gender", update_info: "Update Info", edit_profile: "Edit Profile", cancel: "Cancel", save: "Save",
        goal_title: "Title", category: "Category", select_color: "Select Color:", duration: "Duration", description: "Description",
        add_to_gallery: "Add to Gallery", related_goal: "Related Goal", date: "Date", story: "Story", photo: "Photo",
        celebration_title: "CONGRATS! 🎉", celebration_msg: "Goal Completed! +20 XP", celebration_close: "(Click screen to close)",
        progress: "Progress", delete: "Delete",
        rank_novice: "Novice", rank_apprentice: "Apprentice", rank_skilled: "Skilled", rank_expert: "Expert", rank_legend: "Legend",
        next_rank: "To next rank:", xp_left: "XP left", completed: "Completed", ongoing: "Ongoing",
        chart_info_total: "Total", chart_info_completed: "completed", chart_info_rate: "Success Rate", chart_info_focus: "Top focus area", chart_info_none: "No data yet.",
        goal_type: "Goal Type", target_value: "Target Value", custom_unit: "Unit Name",
        type_running: "Running", type_reading: "Reading", type_travel: "Travel", type_weight: "Weight", type_water: "Water",
        type_study: "Study", type_meditation: "Meditation", type_gym: "Gym", type_language: "Language Learning",
        type_movies: "Movies", type_projects: "Projects", type_savings: "Savings", type_steps: "Steps",
        type_sleep: "Sleep", type_coding: "Coding", type_custom: "Custom",
        about_title: "The Story Behind the Code",
        about_intro: "Hello, I am <strong>Ahmet Taha Erol</strong>.<br><br>I am a <strong>3rd-year Computer Engineering student at Ankara University</strong>. I believe life is more than just lecture notes and exams. What truly matters to me is progressing patiently, growing steadily, and going a little further every day than the day before.<br><br>This platform is not just a website or an ordinary project. It is a digital reflection of discipline, determination, and the desire to build the future step by step.",
        about_why_title: "Why Did I Set Out on This Path?",
        about_why_text: "Over time, I realized this: <strong>Real success is built not with giant leaps, but with small, determined steps taken every day.</strong><br>However, the human mind is forgetful. It fades the effort spent, the sleepless nights, and the unabandoned dreams over time. That is exactly where <strong>Goal Calendar</strong> was born: <em>To witness our own development.</em>",
        about_what_title: "What is Goal Calendar?",
        about_what_text: "Goal Calendar is not just a calendar where you write down goals and forget them; it is a personal companion that visualizes your progress, tracks your discipline, and motivates you.<br>Here you can:<br>• Set daily, weekly, and long-term goals.<br>• Follow your progress step by step.<br>• See how far you've come when motivation drops.<br>• Make the promises you gave yourself more concrete.",
        about_meaning_title: "What Does This Project Mean to Me?",
        about_meaning_text: "For me, this project is much more than an assignment, a personal development map, and also a part of my future engineering journey.<br>While writing code, I didn't just produce lines; I also built patience, order, problem-solving, and continuity habits. Because I know that real success is earned not only with technical knowledge but also with character.",
        about_vision_title: "My Vision",
        about_vision_text: "I want to be an engineer who not only imagines the future but tries to build it line by line.<br>My goal is to produce projects that touch people's lives, encourage discipline, increase productivity, and truly turn technology into benefit. Goal Calendar is one of my first big steps on this journey.",
        about_coincidence_title: "It's No Coincidence You're Here",
        about_coincidence_text: "If you are tired of postponing your goals, struggling to establish discipline, and don't want to leave started jobs unfinished, you are in the right place.<br>This platform exists to be a digital companion not only for me but for everyone who wants to improve themselves.",
        about_final_title: "One Final Note",
        about_final_text: "Remember: Great lives are built with small but steady steps.<br>And sometimes just a calendar can be the beginning of the biggest transformation in a person's life."
    },
    fr: {
        nav_home: "Tableau de Bord", nav_gallery: "Galerie", nav_about: "À Propos", nav_contact: "Contact", nav_profile: "Profil", nav_logout: "Déconnexion",
        username: "Nom d'utilisateur", password: "Mot de passe", login: "Connexion", register: "S'inscrire", no_account: "Pas de compte ?", has_account: "Déjà un compte ?", email: "E-mail", name: "Prénom", surname: "Nom", age: "Âge", gender: "Genre", phone: "Téléphone", select: "Sélectionner", female: "Femme", male: "Homme", other: "Autre",
        chart_completion: "Statut d'Achèvement", chart_category: "Distribution des Catégories", my_goals: "Mes Objectifs", new_goal: "+ Nouvel Objectif",
        all_durations: "Toutes Durées", daily: "Quotidien", weekly: "Hebdomadaire", monthly: "Mensuel", indefinite: "Indéfini",
        all_categories: "Toutes Catégories", cat_health: "Santé", cat_sport: "Sport", cat_academic: "Académique", cat_fun: "Loisir", cat_personal: "Personnel",
        active_goals: "Objectifs Actifs", completed_goals: "Objectifs Terminés",
        success_gallery: "Galerie de Succès", add_photo: "+ Ajouter Photo", gallery_desc: "Collectionnez des souvenirs.",
        contact_quote: "\"La croissance commence par le feedback.\"", contact_desc: "Votre avis compte.", whatsapp_start: "Chat WhatsApp", send_mail: "Envoyer E-mail", linkedin_connect: "Connexion Pro",
        write_to_me: "Écrivez-moi", contact_subject: "Sujet / Titre", contact_message: "Votre Message / Histoire", send_message: "Envoyer", message_sent: "Votre message a été envoyé avec succès !",
        profile_info: "Infos Profil", age_gender: "Âge / Genre", update_info: "Mettre à jour", edit_profile: "Modifier Profil", cancel: "Annuler", save: "Enregistrer",
        goal_title: "Titre", category: "Catégorie", select_color: "Choisir Couleur:", duration: "Durée", description: "Description",
        add_to_gallery: "Ajouter à la Galerie", related_goal: "Objectif Lié", date: "Date", story: "Histoire", photo: "Photo",
        celebration_title: "FÉLICITATIONS! 🎉", celebration_msg: "Objectif Atteint! +20 XP", celebration_close: "(Cliquez pour fermer)",
        progress: "Progrès", delete: "Supprimer",
        rank_novice: "Novice", rank_apprentice: "Apprenti", rank_skilled: "Compagnon", rank_expert: "Expert", rank_legend: "Légende",
        next_rank: "Prochain rang:", xp_left: "XP restants", completed: "Terminé", ongoing: "En cours",
        chart_info_total: "Total", chart_info_completed: "terminé", chart_info_rate: "Taux de Réussite", chart_info_focus: "Focus principal", chart_info_none: "Pas de données.",
        about_title: "L'Histoire Derrière le Code",
        about_intro: "Bonjour, je suis <strong>Ahmet Taha Erol</strong>.<br><br>Je suis étudiant en <strong>3ème année de Génie Informatique à l'Université d'Ankara</strong>. Je crois que la vie ne se résume pas aux notes de cours et aux examens. Ce qui compte vraiment pour moi, c'est de progresser patiemment, de grandir régulièrement et d'aller un peu plus loin chaque jour.<br><br>Cette plateforme n'est pas juste un site web ou un projet ordinaire. C'est un reflet numérique de la discipline, de la détermination et du désir de construire l'avenir étape par étape.",
        about_why_title: "Pourquoi ai-je commencé ce chemin ?",
        about_why_text: "Avec le temps, j'ai réalisé ceci : <strong>Le véritable succès ne se construit pas par des pas de géant, mais par de petits pas déterminés faits chaque jour.</strong><br>Cependant, l'esprit humain est oublieux. Il efface avec le temps les efforts, les nuits blanches et les rêves non abandonnés. C'est exactement là que <strong>Goal Calendar</strong> est né : <em>Pour témoigner de notre propre développement.</em>",
        about_what_title: "Qu'est-ce que Goal Calendar?",
        about_what_text: "Goal Calendar n'est pas seulement un calendrier où vous écrivez et oubliez vos objectifs ; c'est un compagnon personnel qui visualise vos progrès, suit votre discipline et vous motive.<br>Ici vous pouvez :<br>• Définir des objectifs quotidiens, hebdomadaires et à long terme.<br>• Suivre vos progrès étape par étape.<br>• Voir le chemin parcouru lorsque la motivation baisse.<br>• Rendre les promesses que vous vous êtes faites plus concrètes.",
        about_meaning_title: "Que signifie ce projet pour moi ?",
        about_meaning_text: "Pour moi, ce projet est bien plus qu'un devoir, une carte de développement personnel et aussi une partie de mon futur voyage d'ingénierie.<br>En écrivant du code, je n'ai pas seulement produit des lignes ; j'ai aussi construit des habitudes de patience, d'ordre, de résolution de problèmes et de continuité. Car je sais que le vrai succès ne s'acquiert pas seulement avec des connaissances techniques mais aussi avec du caractère.",
        about_vision_title: "Ma Vision",
        about_vision_text: "Je veux être un ingénieur qui n'imagine pas seulement l'avenir mais essaie de le construire ligne par ligne.<br>Mon but est de produire des projets qui touchent la vie des gens, encouragent la discipline, augmentent la productivité et transforment vraiment la technologie en bénéfice. Goal Calendar est l'un de mes premiers grands pas dans ce voyage.",
        about_coincidence_title: "Ce n'est pas un hasard si vous êtes ici",
        about_coincidence_text: "Si vous êtes fatigué de reporter vos objectifs, si vous avez du mal à établir une discipline et si vous ne voulez pas laisser les travaux commencés inachevés, vous êtes au bon endroit.<br>Cette plateforme existe pour être un compagnon numérique non seulement pour moi mais pour tous ceux qui veulent s'améliorer.",
        about_final_title: "Une Dernière Note",
        about_final_text: "N'oubliez pas : Les grandes vies se construisent par de petits pas mais réguliers.<br>Et parfois, juste un calendrier peut être le début de la plus grande transformation dans la vie d'une personne."
    },
    de: {
        nav_home: "Dashboard", nav_gallery: "Galerie", nav_about: "Über", nav_contact: "Kontakt", nav_profile: "Profil", nav_logout: "Abmelden",
        username: "Benutzername", password: "Passwort", login: "Anmelden", register: "Registrieren", no_account: "Kein Konto?", has_account: "Bereits ein Konto?", email: "E-Mail", name: "Vorname", surname: "Nachname", age: "Alter", gender: "Geschlecht", phone: "Telefon", select: "Wählen", female: "Weiblich", male: "Männlich", other: "Andere",
        chart_completion: "Abschlussstatus", chart_category: "Kategorienverteilung", my_goals: "Meine Ziele", new_goal: "+ Neues Ziel",
        all_durations: "Alle Dauern", daily: "Täglich", weekly: "Wöchentlich", monthly: "Monatlich", indefinite: "Unbestimmt",
        all_categories: "Alle Kategorien", cat_health: "Gesundheit", cat_sport: "Sport", cat_academic: "Akademisch", cat_fun: "Spaß", cat_personal: "Persönlich",
        active_goals: "Aktive Ziele", completed_goals: "Erreichte Ziele",
        success_gallery: "Erfolgsgalerie", add_photo: "+ Foto hinzufügen", gallery_desc: "Sammle Erinnerungen.",
        contact_quote: "\"Wachstum beginnt mit Feedback.\"", contact_desc: "Deine Meinung ist wichtig.", whatsapp_start: "WhatsApp Starten", send_mail: "E-Mail Senden", linkedin_connect: "Vernetzen",
        write_to_me: "Schreib mir", contact_subject: "Betreff / Titel", contact_message: "Deine Nachricht / Geschichte", send_message: "Senden", message_sent: "Deine Nachricht wurde erfolgreich gesendet!",
        profile_info: "Profilinfo", age_gender: "Alter / Geschlecht", update_info: "Aktualisieren", edit_profile: "Profil Bearbeiten", cancel: "Abbrechen", save: "Speichern",
        goal_title: "Titel", category: "Kategorie", select_color: "Farbe wählen:", duration: "Dauer", description: "Beschreibung",
        add_to_gallery: "Zur Galerie", related_goal: "Ziel", date: "Datum", story: "Geschichte", photo: "Foto",
        celebration_title: "GLÜCKWUNSCH! 🎉", celebration_msg: "Ziel erreicht! +20 XP", celebration_close: "(Klicken zum Schließen)",
        progress: "Fortschritt", delete: "Löschen",
        rank_novice: "Neuling", rank_apprentice: "Lehrling", rank_skilled: "Geselle", rank_expert: "Experte", rank_legend: "Legende",
        next_rank: "Nächster Rang:", xp_left: "XP übrig", completed: "Abgeschlossen", ongoing: "Laufend",
        chart_info_total: "Gesamt", chart_info_completed: "abgeschlossen", chart_info_rate: "Erfolgsquote", chart_info_focus: "Hauptfokus", chart_info_none: "Keine Daten.",
        about_title: "Die Geschichte hinter dem Code",
        about_intro: "Hallo, ich bin <strong>Ahmet Taha Erol</strong>.<br><br>Ich bin <strong>Student im 3. Jahr Computertechnik an der Universität Ankara</strong>. Ich glaube, dass das Leben mehr ist als nur Vorlesungsnotizen und Prüfungen. Was für mich wirklich zählt, ist geduldig voranzukommen, stetig zu wachsen und jeden Tag etwas weiter zu gehen als gestern.<br><br>Diese Plattform ist nicht nur eine Website oder ein gewöhnliches Projekt. Sie ist ein digitales Spiegelbild von Disziplin, Entschlossenheit und dem Wunsch, die Zukunft Schritt für Schritt aufzubauen.",
        about_why_title: "Warum habe ich diesen Weg eingeschlagen?",
        about_why_text: "Im Laufe der Zeit habe ich dies erkannt: <strong>Wahrer Erfolg wird nicht durch Riesenschritte aufgebaut, sondern durch kleine, entschlossene Schritte, die jeden Tag unternommen werden.</strong><br>Doch der menschliche Geist ist vergesslich. Er lässt die aufgewendete Mühe, die schlaflosen Nächte und die nicht aufgegebenen Träume mit der Zeit verblassen. Genau hier wurde <strong>Goal Calendar</strong> geboren: <em>Um Zeuge unserer eigenen Entwicklung zu sein.</em>",
        about_what_title: "Was ist Goal Calendar?",
        about_what_text: "Goal Calendar ist nicht nur ein Kalender, in den Sie Ziele schreiben und vergessen; es ist ein persönlicher Begleiter, der Ihren Fortschritt visualisiert, Ihre Disziplin verfolgt und Sie motiviert.<br>Hier können Sie:<br>• Tägliche, wöchentliche und langfristige Ziele festlegen.<br>• Ihren Fortschritt Schritt für Schritt verfolgen.<br>• Sehen, wie weit Sie gekommen sind, wenn die Motivation sinkt.<br>• Die Versprechen, die Sie sich selbst gegeben haben, konkreter machen.",
        about_meaning_title: "Was bedeutet dieses Projekt für mich?",
        about_meaning_text: "Für mich ist dieses Projekt viel mehr als eine Hausaufgabe, eine Karte zur persönlichen Entwicklung und auch ein Teil meiner zukünftigen Ingenieursreise.<br>Beim Schreiben von Code habe ich nicht nur Zeilen produziert; ich habe auch Geduld, Ordnung, Problemlösung und Kontinuitätsgewohnheiten aufgebaut. Denn ich weiß, dass wahrer Erfolg nicht nur durch technisches Wissen, sondern auch durch Charakter verdient wird.",
        about_vision_title: "Meine Vision",
        about_vision_text: "Ich möchte ein Ingenieur sein, der sich die Zukunft nicht nur vorstellt, sondern versucht, sie Zeile für Zeile aufzubauen.<br>Mein Ziel ist es, Projekte zu produzieren, die das Leben der Menschen berühren, Disziplin fördern, die Produktivität steigern und Technologie wirklich in Nutzen verwandeln. Goal Calendar ist einer meiner ersten großen Schritte auf dieser Reise.",
        about_coincidence_title: "Es ist kein Zufall, dass Sie hier sind",
        about_coincidence_text: "Wenn Sie es leid sind, Ihre Ziele aufzuschieben, Schwierigkeiten haben, Disziplin aufzubauen, und begonnene Arbeiten nicht unvollendet lassen wollen, sind Sie hier richtig.<br>Diese Plattform existiert, um ein digitaler Begleiter nicht nur für mich, sondern für jeden zu sein, der sich verbessern möchte.",
        about_final_title: "Eine letzte Anmerkung",
        about_final_text: "Denken Sie daran: Große Leben werden mit kleinen, aber stetigen Schritten aufgebaut.<br>Und manchmal kann nur ein Kalender der Beginn der größten Transformation im Leben eines Menschen sein."
    },
    es: {
        nav_home: "Inicio", nav_gallery: "Galería", nav_about: "Sobre", nav_contact: "Contacto", nav_profile: "Perfil", nav_logout: "Salir",
        username: "Usuario", password: "Contraseña", login: "Entrar", register: "Registrarse", no_account: "¿Sin cuenta?", has_account: "¿Ya tienes cuenta?", email: "Correo", name: "Nombre", surname: "Apellido", age: "Edad", gender: "Género", phone: "Teléfono", select: "Seleccionar", female: "Mujer", male: "Hombre", other: "Otro",
        chart_completion: "Estado", chart_category: "Categorías", my_goals: "Mis Metas", new_goal: "+ Nueva Meta",
        all_durations: "Todas", daily: "Diario", weekly: "Semanal", monthly: "Mensual", indefinite: "Indefinido",
        all_categories: "Todas", cat_health: "Salud", cat_sport: "Deporte", cat_academic: "Académico", cat_fun: "Diversión", cat_personal: "Personal",
        active_goals: "Metas Activas", completed_goals: "Metas Completadas",
        success_gallery: "Galería de Éxito", add_photo: "+ Añadir Foto", gallery_desc: "Colecciona recuerdos.",
        contact_quote: "\"El crecimiento comienza con feedback.\"", contact_desc: "Tu opinión importa.", whatsapp_start: "Chat WhatsApp", send_mail: "Enviar Correo", linkedin_connect: "Conectar",
        write_to_me: "Escríbeme", contact_subject: "Asunto / Título", contact_message: "Tu Mensaje / Historia", send_message: "Enviar", message_sent: "¡Tu mensaje ha sido enviado exitosamente!",
        profile_info: "Info Perfil", age_gender: "Edad / Género", update_info: "Actualizar", edit_profile: "Editar Perfil", cancel: "Cancelar", save: "Guardar",
        goal_title: "Título", category: "Categoría", select_color: "Color:", duration: "Duración", description: "Descripción",
        add_to_gallery: "Añadir a Galería", related_goal: "Meta Relacionada", date: "Fecha", story: "Historia", photo: "Foto",
        celebration_title: "¡FELICIDADES! 🎉", celebration_msg: "¡Meta Completada! +20 XP", celebration_close: "(Clic para cerrar)",
        progress: "Progreso", delete: "Borrar",
        rank_novice: "Novato", rank_apprentice: "Aprendiz", rank_skilled: "Habilidoso", rank_expert: "Experto", rank_legend: "Leyenda",
        next_rank: "Siguiente rango:", xp_left: "XP restante", completed: "Completado", ongoing: "En curso",
        chart_info_total: "Total", chart_info_completed: "completado", chart_info_rate: "Tasa de Éxito", chart_info_focus: "Enfoque principal", chart_info_none: "Sin datos.",
        about_title: "La Historia Detrás del Código",
        about_intro: "Hola, soy <strong>Ahmet Taha Erol</strong>.<br><br>Soy estudiante de <strong>3er año de Ingeniería Informática en la Universidad de Ankara</strong>. Soy de los que creen que la vida no se trata solo de apuntes de clase y exámenes. Lo que realmente importa para mí es progresar pacientemente, crecer constantemente e ir un poco más lejos cada día que ayer.<br><br>Esta plataforma no es solo un sitio web o un proyecto ordinario. Es un reflejo digital de la disciplina, la determinación y el deseo de construir el futuro paso a paso.",
        about_why_title: "¿Por qué emprendí este camino?",
        about_why_text: "Con el tiempo, me di cuenta de esto: <strong>El verdadero éxito no se construye con pasos gigantes, sino con pequeños pasos decididos que se dan cada día.</strong><br>Sin embargo, la mente humana es olvidadiza. Desvanece el esfuerzo gastado, las noches de insomnio y los sueños no abandonados con el tiempo. Ahí es exactamente donde nació <strong>Goal Calendar</strong>: <em>Para ser testigos de nuestro propio desarrollo.</em>",
        about_what_title: "¿Qué es Goal Calendar?",
        about_what_text: "Goal Calendar no es solo un calendario donde escribes y olvidas tus metas; es un compañero personal que visualiza tu progreso, rastrea tu disciplina y te motiva.<br>Aquí puedes:<br>• Establecer metas diarias, semanales y a largo plazo.<br>• Seguir tu progreso paso a paso.<br>• Ver cuánto has avanzado cuando baja la motivación.<br>• Hacer más concretas las promesas que te hiciste a ti mismo.",
        about_meaning_title: "¿Qué significa este proyecto para mí?",
        about_meaning_text: "Para mí, este proyecto es mucho más que una tarea, un mapa de desarrollo personal y también una parte de mi futuro viaje de ingeniería.<br>Al escribir código, no solo produje líneas; también construí hábitos de paciencia, orden, resolución de problemas y continuidad. Porque sé que el verdadero éxito se gana no solo con conocimientos técnicos sino también con carácter.",
        about_vision_title: "Mi Visión",
        about_vision_text: "Quiero ser un ingeniero que no solo imagina el futuro, sino que intenta construirlo línea por línea.<br>Mi objetivo es producir proyectos que toquen la vida de las personas, fomenten la disciplina, aumenten la productividad y realmente conviertan la tecnología en beneficio. Goal Calendar es uno de mis primeros grandes pasos en este viaje.",
        about_coincidence_title: "No es coincidencia que estés aquí",
        about_coincidence_text: "Si estás cansado de posponer tus metas, luchando por establecer disciplina y no quieres dejar trabajos empezados sin terminar, estás en el lugar correcto.<br>Esta plataforma existe para ser un compañero digital no solo para mí, sino para todos los que quieran mejorarse.",
        about_final_title: "Una Última Nota",
        about_final_text: "Recuerda: Las grandes vidas se construyen con pasos pequeños pero constantes.<br>Y a veces solo un calendario puede ser el comienzo de la mayor transformación en la vida de una persona."
    },
    ar: {
        nav_home: "الرئيسية", nav_gallery: "المعرض", nav_about: "حول", nav_contact: "اتصل بنا", nav_profile: "الملف الشخصي", nav_logout: "خروج",
        username: "اسم المستخدم", password: "كلمة المرور", login: "دخول", register: "تسجيل", no_account: "لا يوجد حساب؟", has_account: "لديك حساب بالفعل؟", email: "البريد الإلكتروني", name: "الاسم", surname: "اللقب", age: "العمر", gender: "الجنس", phone: "الهاتف", select: "اختر", female: "أنثى", male: "ذكر", other: "آخر",
        chart_completion: "حالة الإنجاز", chart_category: "توزيع الفئات", my_goals: "أهدافي", new_goal: "+ هدف جديد",
        all_durations: "كل الفترات", daily: "يومي", weekly: "أسبوعي", monthly: "شهري", indefinite: "غير محدد",
        all_categories: "كل الفئات", cat_health: "صحة", cat_sport: "رياضة", cat_academic: "أكاديمي", cat_fun: "ترفيه", cat_personal: "شخصي",
        active_goals: "الأهداف النشطة", completed_goals: "الأهداف المكتملة",
        success_gallery: "معرض النجاح", add_photo: "+ إضافة صورة", gallery_desc: "اجمع الذكريات.",
        contact_quote: "\"النمو يبدأ بالملاحظات.\"", contact_desc: "رأيك يهمنا.", whatsapp_start: "بدء محادثة واتساب", send_mail: "إرسال بريد", linkedin_connect: "تواصل مهني",
        write_to_me: "اكتب لي", contact_subject: "الموضوع / العنوان", contact_message: "رسالتك / قصتك", send_message: "إرسال", message_sent: "تم إرسال رسالتك بنجاح!",
        profile_info: "معلومات الملف", age_gender: "العمر / الجنس", update_info: "تحديث المعلومات", edit_profile: "تعديل الملف", cancel: "إلغاء", save: "حفظ",
        goal_title: "العنوان", category: "الفئة", select_color: "اختر لون:", duration: "المدة", description: "الوصف",
        add_to_gallery: "إضافة للمعرض", related_goal: "الهدف المرتبط", date: "التاريخ", story: "القصة", photo: "الصورة",
        celebration_title: "تهانينا! 🎉", celebration_msg: "تم إكمال الهدف! +20 XP", celebration_close: "(انقر للإغلاق)",
        progress: "التقدم", delete: "حذف",
        rank_novice: "مبتدئ", rank_apprentice: "متدرب", rank_skilled: "ماهر", rank_expert: "خبير", rank_legend: "أسطورة",
        next_rank: "الرتبة التالية:", xp_left: "XP متبقي", completed: "مكتمل", ongoing: "جاري",
        chart_info_total: "الإجمالي", chart_info_completed: "مكتمل", chart_info_rate: "نسبة النجاح", chart_info_focus: "التركيز الرئيسي", chart_info_none: "لا توجد بيانات.",
        about_title: "القصة وراء الكود",
        about_intro: "مرحباً، أنا <strong>أحمد طه إيرول</strong>.<br><br>أنا <strong>طالب في السنة الثالثة هندسة كمبيوتر في جامعة أنقرة</strong>. أنا ممن يعتقدون أن الحياة أكثر من مجرد ملاحظات محاضرات وامتحانات. ما يهم حقاً بالنسبة لي هو التقدم بصبر، والنمو بثبات، والذهاب أبعد قليلاً كل يوم عن الأمس.<br><br>هذه المنصة ليست مجرد موقع ويب أو مشروع عادي. إنها انعكاس رقمي للانضباط والعزيمة والرغبة في بناء المستقبل خطوة بخطوة.",
        about_why_title: "لماذا انطلقت في هذا الطريق؟",
        about_why_text: "مع مرور الوقت، أدركت هذا: <strong>النجاح الحقيقي لا يُبنى بقفزات عملاقة، بل بخطوات صغيرة وحازمة تُتخذ كل يوم.</strong><br>ومع ذلك، فإن العقل البشري ينسى. يمحو الجهد المبذول، والليالي التي قضيناها بلا نوم، والأحلام التي لم نتخلى عنها مع مرور الوقت. وهنا بالضبط وُلد <strong>Goal Calendar</strong>: <em>لنشهد تطورنا بأنفسنا.</em>",
        about_what_title: "ما هو Goal Calendar؟",
        about_what_text: "Goal Calendar ليس مجرد تقويم تكتب فيه الأهداف وتنساها؛ إنه رفيق شخصي يصور تقدمك، ويتتبع انضباطك، ويحفزك.<br>هنا يمكنك:<br>• تحديد أهداف يومية وأسبوعية وطويلة الأجل.<br>• متابعة تقدمك خطوة بخطوة.<br>• رؤية المدى الذي وصلت إليه عندما ينخفض الحافز.<br>• جعل الوعود التي قطعتها لنفسك أكثر واقعية.",
        about_meaning_title: "ماذا يعني لي هذا المشروع؟",
        about_meaning_text: "بالنسبة لي، هذا المشروع أكثر بكثير من مجرد واجب، خريطة للتطوير الشخصي وأيضاً جزء من رحلتي الهندسية المستقبلية.<br>أثناء كتابة الكود، لم أنتج سطوراً فقط؛ بل بنيت أيضاً عادات الصبر والنظام وحل المشكلات والاستمرارية. لأنني أعلم أن النجاح الحقيقي لا يُكتسب فقط بالمعرفة التقنية ولكن أيضاً بالشخصية.",
        about_vision_title: "رؤيتي",
        about_vision_text: "أريد أن أكون مهندساً لا يتخيل المستقبل فحسب، بل يحاول بناءه سطراً بسطر.<br>هدفي هو إنتاج مشاريع تلمس حياة الناس، وتشجع الانضباط، وتزيد الإنتاجية، وتحول التكنولوجيا حقاً إلى فائدة. Goal Calendar هو أحد خطواتي الكبيرة الأولى في هذه الرحلة.",
        about_coincidence_title: "وجودك هنا ليس صدفة",
        about_coincidence_text: "إذا كنت قد سئمت من تأجيل أهدافك، وتكافح لإنشاء انضباط، ولا تريد ترك الأعمال التي بدأتها غير مكتملة، فأنت في المكان الصحي.<br>هذه المنصة موجودة لتكون رفيقاً رقمياً ليس لي فقط ولكن لكل من يريد تحسين نفسه.",
        about_final_title: "ملاحظة أخيرة",
        about_final_text: "تذكر: الحياة العظيمة تُبنى بخطوات صغيرة ولكن ثابتة.<br>وأحياناً يمكن أن يكون مجرد تقويم بداية لأكبر تحول في حياة الإنسان."
    }
};

const categoryColors = { 'Sağlık': '#2ecc71', 'Spor': '#3498db', 'Akademik': '#e74c3c', 'Eğlence': '#f1c40f', 'Kişisel': '' };
const personalColors = ['#e67e22', '#9b59b6', '#1abc9c', '#e84393', '#34495e', '#7f8c8d', '#f39c12'];
let selectedCustomColor = personalColors[0];

const goalTypes = {
    running: { unitTR: 'km', unitEN: 'km', unitFR: 'km', unitDE: 'km', unitES: 'km', unitAR: 'كم', step: 0.1 },
    reading: { unitTR: 'sayfa', unitEN: 'pages', unitFR: 'pages', unitDE: 'Seiten', unitES: 'páginas', unitAR: 'صفحات', step: 1 },
    travel: { unitTR: 'şehir', unitEN: 'cities', unitFR: 'villes', unitDE: 'Städte', unitES: 'ciudades', unitAR: 'مدن', step: 1 },
    weight: { unitTR: 'kg', unitEN: 'kg', unitFR: 'kg', unitDE: 'kg', unitES: 'kg', unitAR: 'كغ', step: 0.1 },
    water: { unitTR: 'litre', unitEN: 'liters', unitFR: 'litres', unitDE: 'Liter', unitES: 'litros', unitAR: 'لتر', step: 0.1 },
    study: { unitTR: 'saat', unitEN: 'hours', unitFR: 'heures', unitDE: 'Stunden', unitES: 'horas', unitAR: 'ساعات', step: 0.5 },
    meditation: { unitTR: 'dakika', unitEN: 'minutes', unitFR: 'minutes', unitDE: 'Minuten', unitES: 'minutos', unitAR: 'دقائق', step: 1 },
    gym: { unitTR: 'gün', unitEN: 'days', unitFR: 'jours', unitDE: 'Tage', unitES: 'días', unitAR: 'أيام', step: 1 },
    language: { unitTR: 'kelime', unitEN: 'words', unitFR: 'mots', unitDE: 'Wörter', unitES: 'palabras', unitAR: 'كلمات', step: 1 },
    movies: { unitTR: 'film', unitEN: 'movies', unitFR: 'films', unitDE: 'Filme', unitES: 'películas', unitAR: 'أفلام', step: 1 },
    projects: { unitTR: 'proje', unitEN: 'projects', unitFR: 'projets', unitDE: 'Projekte', unitES: 'proyectos', unitAR: 'مشاريع', step: 1 },
    savings: { unitTR: '₺', unitEN: '₺', unitFR: '₺', unitDE: '₺', unitES: '₺', unitAR: '₺', step: 1 },
    steps: { unitTR: 'adım', unitEN: 'steps', unitFR: 'pas', unitDE: 'Schritte', unitES: 'pasos', unitAR: 'خطوات', step: 100 },
    sleep: { unitTR: 'saat', unitEN: 'hours', unitFR: 'heures', unitDE: 'Stunden', unitES: 'horas', unitAR: 'ساعات', step: 0.5 },
    coding: { unitTR: 'satır', unitEN: 'lines', unitFR: 'lignes', unitDE: 'Zeilen', unitES: 'líneas', unitAR: 'أسطر', step: 10 },
    custom: { unitTR: '', unitEN: '', unitFR: '', unitDE: '', unitES: '', unitAR: '', step: 1 }
};

let currentLang = 'tr';

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    if (lang === 'ar') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }

    const t = translations[lang];
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (t[key]) el.innerHTML = t[key]; // innerHTML kullanarak HTML formatını koru
    });

    updateCharts();
    renderProfile();
    renderGoals();
    renderGallery();
}

document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const u = document.getElementById('reg-username').value;
    if (localStorage.getItem('user_' + u)) { alert("Kullanıcı adı dolu!"); return; }
    const newUser = {
        username: u,
        email: document.getElementById('reg-email').value,
        name: document.getElementById('reg-name').value,
        surname: document.getElementById('reg-surname').value,
        phone: document.getElementById('reg-phone').value,
        age: document.getElementById('reg-age').value,
        gender: document.getElementById('reg-gender').value,
        password: document.getElementById('reg-password').value,
        goals: [], gallery: [], xp: 0
    };
    localStorage.setItem('user_' + u, JSON.stringify(newUser));
    alert("Kayıt başarılı! Giriş yapın.");
    toggleForm('login');
});

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const u = document.getElementById('login-username').value;
    const p = document.getElementById('login-password').value;
    const userData = localStorage.getItem('user_' + u);
    if (!userData) { alert("Kullanıcı bulunamadı!"); return; }
    const user = JSON.parse(userData);
    if (user.password === p) loginSuccess(user);
    else alert("Hatalı parola!");
});

function loginSuccess(user) {
    if (!user.goals) user.goals = [];
    if (!user.gallery) user.gallery = [];
    if (typeof user.xp === 'undefined') user.xp = 0;

    localStorage.setItem('user_' + user.username, JSON.stringify(user));
    currentUser = user;
    sessionStorage.setItem('currentUser', JSON.stringify(user));

    localStorage.setItem('activeUser', user.username);

    document.getElementById('auth-wrapper').style.display = 'none';
    document.getElementById('app-container').style.display = 'flex';
    document.getElementById('daily-quote').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;

    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
    }

    const savedLang = localStorage.getItem('lang') || 'tr';
    document.getElementById('languageSelector').value = savedLang;
    changeLanguage(savedLang);

    renderSidebar();
    initColorPicker();
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const theme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    updateCharts();
}

function initColorPicker() {
    const container = document.getElementById('color-picker-container');
    container.innerHTML = '';
    personalColors.forEach(color => {
        const div = document.createElement('div');
        div.className = 'color-circle';
        div.style.backgroundColor = color;
        div.onclick = function () {
            document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('selected'));
            div.classList.add('selected');
            selectedCustomColor = color;
        };
        container.appendChild(div);
    });
    document.querySelector('.color-circle').classList.add('selected');
}

function checkCategoryColor() {
    const cat = document.getElementById('goal-category').value;
    document.getElementById('custom-color-div').classList.toggle('hidden', cat !== 'Kişisel');
}

function updateGoalTypeUI() {
    const goalType = document.getElementById('goal-type').value;
    const customUnitDiv = document.getElementById('custom-unit-div');
    if (goalType === 'custom') {
        customUnitDiv.classList.remove('hidden');
    } else {
        customUnitDiv.classList.add('hidden');
    }
}

function getGoalUnit(goalType, customUnit) {
    if (goalType === 'custom') {
        return customUnit || 'birim';
    }
    const unitKey = 'unit' + currentLang.toUpperCase();
    return goalTypes[goalType] ? goalTypes[goalType][unitKey] : '';
}


document.getElementById('contact-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value;

    setTimeout(() => {
        alert(translations[currentLang].message_sent);
        e.target.reset();
    }, 500);
});

document.getElementById('add-goal-form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (!currentUser) return;
    const category = document.getElementById('goal-category').value;
    let finalColor = categoryColors[category];
    if (category === 'Kişisel') finalColor = selectedCustomColor;

    const goalType = document.getElementById('goal-type').value;
    const targetValue = parseFloat(document.getElementById('target-value').value);
    const customUnit = document.getElementById('custom-unit').value;

    const newGoal = {
        id: Date.now(),
        title: document.getElementById('goal-title').value,
        category: category,
        duration: document.getElementById('goal-duration').value,
        color: finalColor,
        desc: document.getElementById('goal-desc').value,
        goalType: goalType,
        targetValue: targetValue,
        currentValue: 0,
        customUnit: customUnit,
        unit: getGoalUnit(goalType, customUnit),
        progress: 0
    };
    currentUser.goals.push(newGoal);
    saveUser();
    renderGoals();
    updateCharts();
    closeModal('goal-modal');
    e.target.reset();
    checkCategoryColor();
    updateGoalTypeUI();
});

document.getElementById('add-photo-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const file = document.getElementById('photo-file').files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (event) {
        const img = new Image();
        img.onload = function () {
            const canvas = document.createElement('canvas');
            const MAX_WIDTH = 600;
            const scaleSize = MAX_WIDTH / img.width;
            canvas.width = MAX_WIDTH;
            canvas.height = img.height * scaleSize;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
            const newPhoto = { id: Date.now(), image: dataUrl, goalTitle: document.getElementById('photo-goal-select').value, date: document.getElementById('photo-date').value, story: document.getElementById('photo-story').value };
            try { currentUser.gallery.push(newPhoto); saveUser(); renderGallery(); closeModal('photo-modal'); e.target.reset(); }
            catch (err) { alert("Hafıza dolu! Resim eklenemedi."); }
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(file);
});

function renderGoals() {
    const t = translations[currentLang];
    const activeList = document.getElementById('active-goals-list');
    const completedList = document.getElementById('completed-goals-list');
    activeList.innerHTML = "";
    completedList.innerHTML = "";

    const filterDur = document.getElementById('filter-duration').value;
    const filterCat = document.getElementById('filter-category').value;

    const filteredGoals = currentUser.goals.filter(goal => {
        const matchDur = filterDur === 'all' || goal.duration === filterDur;
        const matchCat = filterCat === 'all' || goal.category === filterCat;
        return matchDur && matchCat;
    });

    filteredGoals.forEach(goal => {

        if (!goal.goalType) {
            goal.goalType = 'custom';
            goal.targetValue = 100;
            goal.currentValue = goal.progress || 0;
            goal.customUnit = '%';
            goal.unit = '%';
        }

        if (typeof goal.currentValue === 'undefined') goal.currentValue = 0;
        if (typeof goal.targetValue === 'undefined') goal.targetValue = 100;

        if (goal.goalType !== 'custom') {
            goal.unit = getGoalUnit(goal.goalType, goal.customUnit);
        }

        goal.progress = goal.targetValue > 0 ? Math.min(100, (goal.currentValue / goal.targetValue) * 100) : 0;

        const isCompleted = goal.currentValue >= goal.targetValue;
        const div = document.createElement('div');
        div.className = 'goal-card' + (isCompleted ? ' completed' : '');
        const goalColor = goal.color || '#95a5a6';
        div.style.borderTopColor = goalColor;

        let displayCat = goal.category;
        if (goal.category === "Sağlık") displayCat = t.cat_health;
        if (goal.category === "Spor") displayCat = t.cat_sport;
        if (goal.category === "Akademik") displayCat = t.cat_academic;
        if (goal.category === "Eğlence") displayCat = t.cat_fun;
        if (goal.category === "Kişisel") displayCat = t.cat_personal;

        const stepValue = goalTypes[goal.goalType] ? goalTypes[goal.goalType].step : 1;

        div.innerHTML = `
            <div class="goal-header">
                <span class="goal-title">${goal.title}</span>
                <span class="goal-category" style="background-color:${goalColor}">${displayCat}</span>
            </div>
            <p style="font-size:0.9rem;color:var(--text-color); opacity:0.8; min-height:40px;">${goal.desc}</p>
            <div class="value-tracker">
                <div class="value-display">
                    <span class="current-value" id="current-${goal.id}">${goal.currentValue}</span>
                    <span class="separator">/</span>
                    <span class="target-value">${goal.targetValue}</span>
                    <span class="unit">${goal.unit}</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" id="progress-bar-${goal.id}" style="width: ${goal.progress}%"></div>
                </div>
                <div class="value-slider-container">
                    <input type="range" class="value-slider" id="slider-${goal.id}" min="0" max="${goal.targetValue}" step="${stepValue}" value="${goal.currentValue}" oninput="updateGoalValue(${goal.id}, this.value)">
                </div>
            </div>
            <button class="delete-btn" onclick="deleteGoal(${goal.id})">${t.delete}</button>
        `;

        if (isCompleted) completedList.appendChild(div);
        else activeList.appendChild(div);
    });
}

function updateGoalValue(id, newValue) {
    const g = currentUser.goals.find(x => x.id === id);
    if (!g) return;

    newValue = parseFloat(newValue);
    if (isNaN(newValue)) newValue = 0;

    const wasCompleted = g.currentValue >= g.targetValue;

    g.currentValue = Math.min(newValue, g.targetValue * 2); 
    g.progress = g.targetValue > 0 ? Math.min(100, (g.currentValue / g.targetValue) * 100) : 0;

    const isCompleted = g.currentValue >= g.targetValue;

    if (!wasCompleted && isCompleted) {
        currentUser.xp = (currentUser.xp || 0) + 20;
        showCelebration(g.color || '#b8e994');
    } else if (wasCompleted && !isCompleted) {
        currentUser.xp = Math.max(0, (currentUser.xp || 0) - 20);
    }

    saveUser();

    document.getElementById(`current-${id}`).innerText = g.currentValue;
    document.getElementById(`progress-bar-${id}`).style.width = `${g.progress}%`;
    const sliderEl = document.getElementById(`slider-${id}`);
    if (sliderEl) sliderEl.value = g.currentValue;

    if (isCompleted || wasCompleted) {
        setTimeout(() => {
            renderGoals();
            updateCharts();
            renderProfile();
        }, 500);
    } else {
        updateCharts();
    }
}

function incrementGoalValue(id, step) {
    const g = currentUser.goals.find(x => x.id === id);
    if (!g) return;
    const newValue = g.currentValue + step;
    updateGoalValue(id, newValue);
}

function decrementGoalValue(id, step) {
    const g = currentUser.goals.find(x => x.id === id);
    if (!g) return;
    const newValue = Math.max(0, g.currentValue - step);
    updateGoalValue(id, newValue);
}

function updateGoal(id, val) {
    updateGoalValue(id, val);
}

function showCelebration(color) {
    const overlay = document.getElementById('celebration-overlay');
    const title = document.getElementById('celebration-title');
    title.style.color = color;
    overlay.style.display = 'flex';
    for (let i = 0; i < 30; i++) {
        const conf = document.createElement('div');
        conf.className = 'confetti';
        conf.style.left = Math.random() * 100 + 'vw';
        conf.style.backgroundColor = ['#f00', '#0f0', '#00f', '#ff0', '#0ff'][Math.floor(Math.random() * 5)];
        conf.style.animationDuration = (Math.random() * 2 + 2) + 's';
        overlay.appendChild(conf);
    }
    setTimeout(() => { overlay.style.display = 'none'; }, 4000);
}

function deleteGoal(id) {
    if (confirm("Silmek istiyor musun?")) {
        const g = currentUser.goals.find(x => x.id === id);
        if (g && parseInt(g.progress) === 100) {
            currentUser.xp = Math.max(0, (currentUser.xp || 0) - 20);
        }
        currentUser.goals = currentUser.goals.filter(x => x.id !== id);
        saveUser();
        renderGoals();
        updateCharts();
        renderProfile();
    }
}

function updateCharts() {
    if (!currentUser || !currentUser.goals) return;
    const t = translations[currentLang];

    const isLight = document.body.classList.contains('light-mode');
    const textColor = isLight ? '#333' : '#ccc';

    const total = currentUser.goals.length;
    const completed = currentUser.goals.filter(g => parseInt(g.progress) === 100).length;
    const ongoing = total - completed;

    const counts = {};
    currentUser.goals.forEach(g => {
        counts[g.category] = (counts[g.category] || 0) + 1;
    });

    const categoryLabels = Object.keys(counts);
    const categoryData = Object.values(counts);
    const bgColors = categoryLabels.map(cat => {
        if (categoryColors[cat]) return categoryColors[cat];
        return '#9b59b6';
    });

    const ctx1 = document.getElementById('completionChart').getContext('2d');
    if (completionChart) completionChart.destroy();
    completionChart = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: [t.completed, t.ongoing],
            datasets: [{
                data: [completed, ongoing],
                backgroundColor: ['#b8e994', '#666'], borderWidth: 0
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: textColor } } } }
    });

    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;
    const completionText = `${t.chart_info_total} <span class="highlight-text">${total}</span>, <span class="highlight-text">${completed}</span> ${t.chart_info_completed}.<br>${t.chart_info_rate}: <span class="highlight-text">%${completionRate}</span>`;
    document.getElementById('completion-info').innerHTML = completionText;

    const ctx2 = document.getElementById('categoryChart').getContext('2d');
    if (categoryChart) categoryChart.destroy();
    categoryChart = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: categoryLabels,
            datasets: [{
                data: categoryData,
                backgroundColor: bgColors, borderWidth: 0
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: textColor } } } }
    });

    let maxCat = ''; let maxCount = 0;
    for (const [cat, count] of Object.entries(counts)) { if (count > maxCount) { maxCount = count; maxCat = cat; } }
    const categoryText = maxCat ? `${t.chart_info_focus}: <span class="highlight-text">${maxCat}</span> (${maxCount})` : t.chart_info_none;
    document.getElementById('category-info').innerHTML = categoryText;
}

function getRankInfo(xp) {
    const t = translations[currentLang];
    if (xp < 100) return { rank: t.rank_novice, next: 100 };
    if (xp < 300) return { rank: t.rank_apprentice, next: 300 };
    if (xp < 600) return { rank: t.rank_skilled, next: 600 };
    if (xp < 1000) return { rank: t.rank_expert, next: 1000 };
    return { rank: t.rank_legend, next: 2000 };
}

function renderProfile() {
    const t = translations[currentLang];
    document.getElementById('view-username').innerText = currentUser.username;
    document.getElementById('view-name').innerText = currentUser.name || '';
    document.getElementById('view-surname').innerText = currentUser.surname || '';
    document.getElementById('view-email').innerText = currentUser.email;
    document.getElementById('view-phone').innerText = currentUser.phone;
    document.getElementById('view-age-gender').innerText = `${currentUser.age || '-'} / ${currentUser.gender || '-'}`;

    document.getElementById('p-username').value = currentUser.username;
    document.getElementById('p-email').value = currentUser.email;
    document.getElementById('p-name').value = currentUser.name;
    document.getElementById('p-surname').value = currentUser.surname;
    document.getElementById('p-phone').value = currentUser.phone;
    document.getElementById('p-age').value = currentUser.age;
    document.getElementById('p-gender').value = currentUser.gender;

    const xp = currentUser.xp || 0;
    const rankInfo = getRankInfo(xp);

    document.getElementById('display-rank').innerText = rankInfo.rank;
    document.getElementById('display-xp').innerText = `${xp} XP`;

    let prevThreshold = 0;
    if (xp >= 100) prevThreshold = 100;
    if (xp >= 300) prevThreshold = 300;
    if (xp >= 600) prevThreshold = 600;
    if (xp >= 1000) prevThreshold = 1000;

    const range = rankInfo.next - prevThreshold;
    const progress = xp - prevThreshold;
    const percentage = Math.min(100, Math.max(0, (progress / range) * 100));

    document.getElementById('xp-bar').style.width = `${percentage}%`;
    document.getElementById('next-rank-text').innerText = `${t.next_rank} ${rankInfo.next - xp} ${t.xp_left}`;

    renderSidebar(); 
}

function renderGallery() {
    const list = document.getElementById('gallery-list');
    list.innerHTML = "";
    const filterDur = document.getElementById('filter-gallery-duration').value;
    const filterCat = document.getElementById('filter-gallery-category').value;

    if (currentUser.gallery.length === 0) { list.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:30px;color:var(--text-color);">Galeri boş.</div>`; return; }

    const filteredPhotos = currentUser.gallery.filter(photo => {
        const associatedGoal = currentUser.goals.find(g => g.title === photo.goalTitle);
        if (!associatedGoal) return filterDur === 'all' && filterCat === 'all';
        const matchDur = filterDur === 'all' || associatedGoal.duration === filterDur;
        const matchCat = filterCat === 'all' || associatedGoal.category === filterCat;
        return matchDur && matchCat;
    });

    filteredPhotos.forEach(p => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="${p.image}">`;
        item.onclick = () => {
            document.getElementById('view-photo-content').innerHTML = `
                <img src="${p.image}">
                <div class="image-details"><h3 style="color:var(--pastel-blue);">${p.goalTitle}</h3><p style="color:var(--text-color);opacity:0.7;">📅 ${p.date}</p><p style="color:var(--text-color);"><i>"${p.story}"</i></p></div>`;
            openModal('view-photo-modal');
        }
        list.appendChild(item);
    });
}

document.getElementById('pomodoro-duration')?.addEventListener('change', function () {
    resetPomodoro(); 
});



let audioCtx = null;
const activeNodes = {}; 
const bufferCache = {};

function initAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

function createNoiseBuffer(type) {
    if (!audioCtx) return null;
    if (bufferCache[type]) return bufferCache[type];

    const bufferSize = audioCtx.sampleRate * 2; 
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = buffer.getChannelData(0);

    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        if (type === 'white') {
            output[i] = white;
        } else if (type === 'pink') {
            const b0 = 0.99886 * (lastOut || 0) + white * 0.0555179;
            output[i] = b0 * 3.5; 
            lastOut = b0;
        } else if (type === 'brown') {
            const brown = (lastOut || 0) + (0.02 * white) / 1.02;
            output[i] = brown * 3.5;
            lastOut = brown;
            output[i] /= 3.5;
        }
    }
    bufferCache[type] = buffer;
    return buffer;
}

const generators = {
    white_noise: (ctx) => {
        const source = ctx.createBufferSource();
        source.buffer = createNoiseBuffer('white');
        source.loop = true;
        const gain = ctx.createGain();
        gain.gain.value = 0.15; // Slightly increased
        source.connect(gain).connect(ctx.destination);
        source.start();
        return { nodes: [source, gain], mainGain: gain };
    },
    rain: (ctx) => {
        const source = ctx.createBufferSource();
        source.buffer = createNoiseBuffer('pink');
        source.loop = true;
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 750;
        const gain = ctx.createGain();
        gain.gain.value = 0.35;
        source.connect(filter).connect(gain).connect(ctx.destination);
        source.start();
        return { nodes: [source, filter, gain], mainGain: gain };
    },
    ocean: (ctx) => {
        const source = ctx.createBufferSource();
        source.buffer = createNoiseBuffer('brown');
        source.loop = true;

        const gain = ctx.createGain();
        gain.gain.value = 0.4;
        const lfo = ctx.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.value = 0.08;
        const lfoGain = ctx.createGain();
        lfoGain.gain.value = 0.3;

        lfo.connect(lfoGain);
        lfoGain.connect(gain.gain);

        source.connect(gain).connect(ctx.destination);
        source.start();
        lfo.start();
        return { nodes: [source, gain, lfo, lfoGain], mainGain: gain };
    },
    fireplace: (ctx) => {
        const source = ctx.createBufferSource();
        source.buffer = createNoiseBuffer('pink');
        source.loop = true;
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 400;
        const gain = ctx.createGain();
        gain.gain.value = 0.5;
        source.connect(filter).connect(gain).connect(ctx.destination);
        source.start();
        return { nodes: [source, filter, gain], mainGain: gain };
    },

    library: (ctx) => {
        const source = ctx.createBufferSource();
        source.buffer = createNoiseBuffer('pink');
        source.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 550;
        filter.Q.value = 0.5;

        const gain = ctx.createGain();
        gain.gain.value = 0.2;

        source.connect(filter).connect(gain).connect(ctx.destination);
        source.start();
        return { nodes: [source, filter, gain], mainGain: gain };
    },

    forest: (ctx) => {
        const nodes = [];

        const windSrc = ctx.createBufferSource();
        windSrc.buffer = createNoiseBuffer('pink');
        windSrc.loop = true;
        const windFilter = ctx.createBiquadFilter();
        windFilter.type = 'highpass';
        windFilter.frequency.value = 500;
        const windGain = ctx.createGain();
        windGain.gain.value = 0.08;
        windSrc.connect(windFilter).connect(windGain).connect(ctx.destination);
        windSrc.start();
        nodes.push(windSrc, windFilter, windGain);

        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = 4000;
        const lfo = ctx.createOscillator();
        lfo.frequency.value = 1;
        const oscGain = ctx.createGain();
        oscGain.gain.value = 0.03;
        lfo.connect(oscGain.gain);
        osc.connect(oscGain).connect(ctx.destination);
        osc.start();
        lfo.start();
        nodes.push(osc, lfo, oscGain);

        return { nodes: nodes, mainGain: windGain };
    },
};

function toggleSound(type) {
    initAudioContext();
    const btn = document.querySelector(`button[onclick="toggleSound('${type}')"]`);

    if (activeNodes[type]) {
        const entry = activeNodes[type];
        if (entry.mainGain) {
            entry.mainGain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.1);
        }
        setTimeout(() => {
            entry.nodes.forEach(node => {
                try { node.stop(); } catch (e) { }
                try { node.disconnect(); } catch (e) { }
            });
            delete activeNodes[type];
            btn.classList.remove('active');
        }, 200);
    } else {
        if (generators[type]) {
            const entry = generators[type](audioCtx);
            if (entry.mainGain) {
                const val = entry.mainGain.gain.value;
                entry.mainGain.gain.setValueAtTime(0, audioCtx.currentTime);
                entry.mainGain.gain.linearRampToValueAtTime(val, audioCtx.currentTime + 0.5);
            }
            activeNodes[type] = entry;
            btn.classList.add('active');
        }
    }
}

document.getElementById('profile-form').addEventListener('submit', function (e) {
    e.preventDefault();
    currentUser.name = document.getElementById('p-name').value;
    currentUser.surname = document.getElementById('p-surname').value;
    currentUser.phone = document.getElementById('p-phone').value;
    currentUser.age = document.getElementById('p-age').value;
    currentUser.gender = document.getElementById('p-gender').value;
    currentUser.email = document.getElementById('p-email').value;

    saveUser();
    alert("Profil güncellendi!");
    renderProfile();
    toggleProfileEdit(false);
});

function toggleProfileEdit(showEdit) {
    const viewCard = document.getElementById('profile-view-card');
    const editCard = document.getElementById('profile-edit-card');

    if (showEdit) {
        viewCard.classList.add('hidden');
        editCard.classList.remove('hidden');
    } else {
        viewCard.classList.remove('hidden');
        editCard.classList.add('hidden');
    }
}

function saveUser() {
    localStorage.setItem('user_' + currentUser.username, JSON.stringify(currentUser));
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
}

function openModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

function toggleForm(type) {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const formTitle = document.getElementById('form-title');
    const t = translations[currentLang];

    if (type === 'register') {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        formTitle.textContent = t.register;
    } else {
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
        formTitle.textContent = "Goal Calendar";
    }
}

function showSection(sectionId) {
    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
    document.getElementById('section-' + sectionId).classList.add('active');

    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    document.querySelector(`nav a[onclick="showSection('${sectionId}')"]`)?.classList.add('active');
}

function logout() {
    sessionStorage.removeItem('currentUser');
    localStorage.removeItem('activeUser');
    location.reload();
}

window.onclick = e => { if (e.target.classList.contains('modal-overlay')) e.target.style.display = 'none'; }

const sess = sessionStorage.getItem('currentUser');
if (sess) {
    const u = JSON.parse(sess);
    const real = JSON.parse(localStorage.getItem('user_' + u.username));
    if (real) loginSuccess(real);
}
else {
    const rememberedUser = localStorage.getItem('activeUser');
    if (rememberedUser) {
        const real = JSON.parse(localStorage.getItem('user_' + rememberedUser));
        if (real) loginSuccess(real);
    }
}

function renderSidebar() {
    if (!currentUser) return;

    var nameEl = document.getElementById('sb-username');
    var rankEl = document.getElementById('sb-rank');
    var avatarEl = document.getElementById('sb-avatar');
    var xpBarEl = document.getElementById('sb-xp-bar');
    var xpTextEl = document.getElementById('sb-xp-text');

    if (nameEl) nameEl.textContent = currentUser.username;

    const rankInfo = getRankInfo(currentUser.xp || 0);
    if (rankEl) rankEl.textContent = rankInfo.rank;
    currentUser.rank = rankInfo.rank;

    var uName = currentUser.name || '';
    var uSurname = currentUser.surname || '';
    if (avatarEl && (uName || uSurname)) {
        var surnameInitial = uSurname ? uSurname.charAt(0) : '';
        var initials = (uName.charAt(0) + surnameInitial).toUpperCase();
        avatarEl.textContent = initials;
    }

    if (xpBarEl && xpTextEl) {
        var percent = Math.min((currentUser.xp / 1000) * 100, 100);
        xpBarEl.style.width = percent + "%";
        xpTextEl.textContent = (currentUser.xp || 0) + " XP";
    }
}

let pomodoroInterval;
let pomodoroTime = 25 * 60;
let isPomodoroRunning = false;
let defaultPomodoroTime = 25 * 60;

function updateTimerDisplay() {
    const minutes = Math.floor(pomodoroTime / 60);
    const seconds = pomodoroTime % 60;
    const timerEl = document.getElementById('pomodoro-timer');
    if (timerEl) {
        if (document.activeElement !== timerEl) {
            timerEl.innerText = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        }
    }
}

function startPomodoro() {
    if (isPomodoroRunning) return;

    if (document.body.classList.contains('light-mode')) {
        toggleTheme();
    }

    isPomodoroRunning = true;
    document.getElementById('btn-start').disabled = true;

    const timerEl = document.getElementById('pomodoro-timer');
    timerEl.contentEditable = "false";

    const statusEl = document.getElementById('pomodoro-status');
    statusEl.textContent = "Odaklanıyor...";
    statusEl.style.color = "var(--pastel-green)";

    pomodoroInterval = setInterval(() => {
        pomodoroTime--;
        updateTimerDisplay();

        if (pomodoroTime <= 0) {
            clearInterval(pomodoroInterval);
            isPomodoroRunning = false;
            document.getElementById('btn-start').disabled = false;

            timerEl.contentEditable = "true";

            statusEl.textContent = "Süre Doldu!";
            statusEl.style.color = "var(--pastel-red)";
            alert("Pomodoro Tamamlandı! Mola zamanı.");
            resetPomodoro();
        }
    }, 1000);
}

function pausePomodoro() {
    clearInterval(pomodoroInterval);
    isPomodoroRunning = false;
    document.getElementById('btn-start').disabled = false;

    document.getElementById('pomodoro-timer').contentEditable = "true";

    const statusEl = document.getElementById('pomodoro-status');
    statusEl.textContent = "Duraklatıldı";
    statusEl.style.color = "#888";
}

function resetPomodoro() {
    pausePomodoro();

    pomodoroTime = defaultPomodoroTime;

    const timerEl = document.getElementById('pomodoro-timer');
    const minutes = Math.floor(pomodoroTime / 60);
    const seconds = pomodoroTime % 60;
    timerEl.innerText = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    timerEl.contentEditable = "true";

    document.getElementById('pomodoro-status').textContent = "Odaklan!";
}

document.addEventListener('DOMContentLoaded', () => {
    const timerEl = document.getElementById('pomodoro-timer');

    if (timerEl) {
        timerEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                timerEl.blur();
            }
        });

        timerEl.addEventListener('blur', () => {
            let text = timerEl.innerText.trim();
            text = text.replace('.', ':');

            let minutes = 25;
            let seconds = 0;

            if (text.includes(':')) {
                const parts = text.split(':');
                minutes = parseInt(parts[0]) || 0;
                seconds = parseInt(parts[1]) || 0;
            } else {
                minutes = parseInt(text) || 25;
            }

            if (minutes > 180) minutes = 180;
            if (minutes < 1) minutes = 1;

            pomodoroTime = (minutes * 60) + seconds;
            defaultPomodoroTime = pomodoroTime;
            updateTimerDisplay();
        });
    }
});

function openAddPhotoModal() {
    const s = document.getElementById('photo-goal-select');
    s.innerHTML = "";

    if (!currentUser.goals || currentUser.goals.length === 0) {
        alert("Galeriye fotoğraf eklemek için önce en az bir 'Hedef' oluşturmalısın!");
        return;
    }

    currentUser.goals.forEach(g => {
        const o = document.createElement('option');
        o.value = g.title;
        o.innerText = g.title;
        s.appendChild(o);
    });

    openModal('photo-modal');
}
