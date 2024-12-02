<template>
  <div class="layout">
    <!-- Header 영역 -->
    <header class="header">
      <h1>My App</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>

    <div class="content">
      <!-- Sidebar 영역 -->
      <aside class="sidebar">
        <ul>
          <li><RouterLink to="/board/BoardList">Dashboard</RouterLink></li>
          <li><RouterLink to="/board/AgGridPage">Settings</RouterLink></li>
        </ul>
      </aside>

      <!-- Main Content 영역 -->
      <main class="main">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.content {
  display: flex;
  flex: 1;
}

.sidebar {
  width: 200px;
  background-color: #f4f4f4;
  padding: 10px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.main {
  flex: 1;
  padding: 20px;
}
</style>
