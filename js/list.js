/**
 * Utilisation de https://listjs.com pour filtrer la liste des utilisateurs
 * dynamiquement avec une zone de recherche
 */

var options = {
   valueNames: [ 'user-name'],
   searchClass: 'user-name'
 };
 
 document.addEventListener('DOMContentLoaded', function() {
   var list = new List('user-list-search', options, user);
 })