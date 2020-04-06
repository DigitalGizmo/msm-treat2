<template>
  <div class="lightbox" @click.self="closeCredits">
    <div id="slimpop-wrapper" class="credits-pop">

      <header>
        <p class="close">
          <a @click="closeCredits">Close</a>
        </p>

        <h2>Treat&rsquo;s Journal</h2>
        <h1>Credits</h1>
      </header>

      <div>
        <p>The Journal of Joseph Treat is in the collection of the Maine State Archives. The journal and its images by Maine State Archives photographer and imaging specialist, Peter Mallow, are used here with permission.</p>

        <p>A published transcription and study of the journal and its historical context has been written by University of Maine historian Micah A. Pawling. Dr. Pawling&rsquo;s comprehensive work, <em>Wabanaki Homeland and the New State of Maine: The 1820 Journal and Plans of Survey of Joseph Treat,</em> is available in libraries and the Maine State Museum Store.</p>

        <p>The Maine State Museum is grateful to Micah A. Pawling and James E. Francis, Sr., Director of the Penobscot Nation Cultural and Historic Preservation Department, for their knowledge, guidance, and reviews during the development of this educational interactive. The Maine State Museum is also grateful to Carlson Williams. Mr. Williams lent the 1815 Greenleaf map with notations by Joseph Treat and inspired the museum&rsquo;s exploration of the 1820 journey.</p>

        <h2>Educational interactive content planning, design, and development</h2>
        <ul>
          <li><strong>Maine State Museum</strong></li>
          <li>Angela Goebel-Bain, Curator of Historical Collections</li>
          <li>Dave Hunt, Lead Educator</li>
          <li>Sheila McDonald, Deputy Director</li>
          <li>Joanna Torow, Chief Educator</li>
          <li>Kate Webber, Lead Educator</li>
          <li><strong>Digital Gizmo</strong></li>
          <li>Don Button, Technical Director</li>
          <li>Juliet Jacobson, Design Director</li>
          <li><strong>Blue Marble Geographics</strong></li>
          <li>Kris Berglund, Vice-President of Sales</li>
        </ul>
      </div>

    </div><!-- /#slippop-wrapper -->
  </div><!-- /.lightbox -->
</template>

<script>
export default {
  props: {
    entry: {
      type: Object
    },
    closeCredits: Function,
    currIndex: Number
  }
}
</script>

<style lang="scss" scoped>

  .credits-pop {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    height: 50%;
    margin: 10% auto;
    width: 50%;

    div {
      overflow-y: auto;
    }
  }

  h2 {
    font-size: 1em;
    font-variant: small-caps;
    letter-spacing: .05em;
    margin: 0;
  }

  .close {
    font-size: 1em;
    font-variant: small-caps;
    letter-spacing: .05em;
    position: absolute;
    top: 1em;
    right: 1em;
  }

  .close a {
    color: #C64C17;
  }
</style>
