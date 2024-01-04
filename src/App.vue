<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Portfolio</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#Home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Activity">Activity</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Certificate">Certificate</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Contact">Contact</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Project
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view v-slot="{ }">
    <component :is="HomeView" />
    <component :is="Activity" />
    <component :is="Certificate" />
  </router-view>
  <div class="container py-5">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div class="col-md-4 d-flex align-items-center"><span class="mb-3 mb-md-0 text-muted">@Kanyaphat</span></div>
      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li><a href="https://line.me/ti/p/M2ZWUIBbUn?fbclid=IwAR3fHOEDESLMXfjrRlyjH1J19kJ-IA-ifMgFeqFFd10CqIKgzdrO0v5tVk8" target="_blank"><i class="fa-brands fa-line m-1 text-dark"
              style="font-size:25px;"></i></a></li>
        <li><a href="https://www.instagram.com/_i.xam/" target="_blank"><i class="fa-brands fa-square-instagram m-1 text-dark"
              style="font-size:25px;"></i></a></li>
        <li><a href="https://www.facebook.com/profile.php?id=100007352045291" target="_blank"><i class="fa-brands fa-facebook m-1 text-dark"
              style="font-size:25px;"></i></a></li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
import Activity from './views/Activity.vue'
import Certificate from './views/Certificate.vue'
</script>