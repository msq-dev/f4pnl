<script>
  import NavItem from "./NavItem.svelte"
</script>

<nav class="sidebar-nav | bg-dark">
  <div class="nav-section">
    <NavItem sectionName="Intro" />
    <NavItem sectionName="Top Content" />
    <NavItem sectionName="Main Content" />
  </div>
</nav>

<style>
  .sidebar-nav {
    padding: 1em 1.5em 1em 1.5em;
    min-width: 12ch;
    /* position: sticky;
    top: 0; */
  }
</style>
