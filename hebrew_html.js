//import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.esm.browser.js';
//43/113
var com = [//components
    {
        name:'Hקו',
        template:`<hr>`,
    },
    {
        name:'Hלמטה',
        template:`<br>`,
    },
    {
        name:'Hכפתור',
        props: ['לחיצה','תז','כותרת','מחלקה','מוסתר'],
        template:`<button v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת" :onclick="לחיצה"><slot></slot></button>`,
    },
    {
        name:'Hעיצוב',
        template:`<style ><slot></slot></style>`,
    },
    {
        name:'Hאיןתסריט',
        template:`<noscript><slot></slot></noscript>`,
    },
    {
        name:'Hכתובתעיצוב',
        props:['כתובת'],
        template:`<link rel="stylesheet" :href="כתובת">`,
    },
    {
        name:'Hקישור',
        props:['כתובת','תז','כותרת','מחלקה','מוסתר'],
        template:`<a v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת" :href="כתובת"><slot></slot></a>`,
    },
    {
        name:'Hכותרת',
        props:['תז','כותרת','מחלקה','מוסתר'],
        template:`<title v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת"><slot></slot></title>`,
    },
    {
        name:'Hמודגש',
        props:['תז','כותרת','מחלקה','מוסתר'],
        template:`<b v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת"><slot></slot></b>`,
    },
    {
        name:'Hעקום',
        props:['תז','כותרת','מחלקה','מוסתר'],
        template:`<i v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת"><slot></slot></i>`,
    },
    {
        name:'Hגרשיים',
        props:['תז','כותרת','מחלקה','מוסתר'],
        template:`<q v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת"><slot></slot></q>`,
    },
    {
        name:'Hמחוק',
        props:['תז','כותרת','מחלקה','מוסתר'],
        template:`<s v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת"><slot></slot></s>`,
    },
    {
        name:'Hקותחתון',
        props:['תז','כותרת','מחלקה','מוסתר'],
        template:`<u v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת"><slot></slot></u>`,
    },
    {
        name:'Hמרקר',
        props:['תז','כותרת','מחלקה','מוסתר'],
        template:`<mark v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת"><slot></slot></mark>`,
    },
    {
        name:'Hמעוצב',
        props:['תז','כותרת','מחלקה','מוסתר'],
        template:`<pre v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת"><slot></slot></pre>`,
    },
    {
        name:'Hקועוטף',
        props:['תז','כותרת','מחלקה','מוסתר'],
        template:`<fieldset v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת"><slot></slot></fieldset>`,
    },
    {
        name:'Hכותרתקע',
        props:['תז','כותרת','מחלקה','מוסתר'],
        template:`<legend v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת"><slot></slot></legend>`,
    },
    {
        name:'Hהפרדה',
        props:['תז','כותרת','מחלקה','מוסתר'],
        template:`<div v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת"><slot></slot></div>`,
    },
    {
        name:'Hרשימהמ',
        props:['התחלה','תז','כותרת','מחלקה','מוסתר'],
        template:`<ol v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת" :start="התחלה"><slot></slot></ol>`,
    },
    {
        name:'Hרשימה',
        props:['תז','כותרת','מחלקה','מוסתר'],
        template:`<ul v-if="מוסתר!='כן'"
        :id="תז" :class="מחלקה" :title="כותרת"><slot></slot></ul>`,
        //
    },
    {
        name:'Hפריטרשימה',
        props:['תז','כותרת','מחלקה','מוסתר'],
        template:`<li v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת"><slot></slot></li>`,
    },
    {
        name:'Hפירוט',
        props:['תז','כותרת','מחלקה','מוסתר'],
        template:`<details v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת"><slot></slot></details>`,
    },
    {
        name:'Hסיכום',
        props:['תז','כותרת','מחלקה','מוסתר'],
        template:`<summary v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת"><slot></slot></summary>`,
    },
    {
        name:'Hטופס',
        props:['תז','כותרת','מחלקה','מוסתר','אל'],
        template:`<form :action="אל" v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת"><slot></slot></form>`,
    },
    {
        name:'Hתיבתטקסט',
        props:['תז','כותרת','מחלקה','מוסתר','טורים','שורות'],
        template:`<textarea :rows="שורות" :cols="טורים" v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת"><slot></slot></textarea>`,
    },
    {
        name:'Hבחירה',
        props:['תז','כותרת','מחלקה','מוסתר','גודל',],
        template:`<select :size="גודל" v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת"><slot></slot></select>`,
    },
    {
        name:'Hאפשרות',
        props:['תז','כותרת','מחלקה','מוסתר','ערך'],
        template:`<option :size="גודל" v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת" :value="ערך"><slot></slot></option>`,
    },
    {
        name:'Hטעינה',//22
        props:['תז','כותרת','מחלקה','מוסתר','קצת','הרבה','ערך'],
        template:`<meter :min="קצת" :max="הרבה" :value="ערך"></meter>`,
        methods: {
            meter(){
                setInterval(()=>{
                    document.querySelector('meter').value++;
                },100)
            }
        },
    },
    {
        name:'Hטבלה',
        props:['תז','כותרת','מחלקה','מוסתר'],
        template:`<table :size="גודל" v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת"><slot></slot></table>`,
    },
    {
        name:'Hכותרתטבלה',
        props:['תז','כותרת','מחלקה','מוסתר'],
        template:`<th :size="גודל" v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת" ><slot></slot></th>`,
    },
    {
        name:'Hשורה',
        props:['תז','כותרת','מחלקה','מוסתר'],
        template:`<tr :size="גודל" v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת" ><slot></slot></tr>`,
    },
    {
        name:'Hמשבצת',
        props:['תז','כותרת','מחלקה','מוסתר'],
        template:`<td :size="גודל" v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת" ><slot></slot></td>`,
    },
    {
        name:'Hקלט',
        props:['תז','כותרת','מחלקה','מוסתר','גודל','סוג','טקסט'],
        template:`<span v-if="מוסתר!='כן'">
        <input v-if="סוג == 'רדיו'" type="radio" :id="תז" :class="מחלקה" :title="כותרת" >
        <input v-else-if="סוג == 'לשלוח'":id="תז" :class="מחלקה" :title="כותרת" type="submit" value="Submit" :placeholder="טקסט">
        <input v-else-if="סוג == 'בחירה'" type="checkbox" :id="תז" :class="מחלקה" :title="כותרת" >
        <input v-else-if="סוג == 'אימל'"type="email" :id="תז" :class="מחלקה" :title="כותרת" :placeholder="טקסט">
        <input v-else-if="סוג == 'סיסמא'"type="password" :id="תז" :class="מחלקה" :title="כותרת" :placeholder="טקסט">
        <input v-else type="text" :id="תז" :class="מחלקה" :title="כותרת" :placeholder="טקסט"
        </span>`,
    }
    
];
var abc = ['','א','ב','ג','ד','ה','ו'];
for(let i = 0;i<abc.length;i++){
    com.push({ 
        name:'H'+abc[i],
        props:['תז','כותרת','מחלקה','מוסתר'],
        template:`<h`+i+` v-if="מוסתר!='כן'":id="תז" :class="מחלקה" :title="כותרת"><slot></slot></h`+i+`>`,   
    })
}
for(let i = 0;i<com.length;i++){
    Vue.component(com[i].name, {
        props:com[i].props,
        template: com[i].template,
    }) 
}

new Vue({ el: '.htmlHB' })
