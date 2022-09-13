<template>
  <!-- Modal -->
  <div class="modal fade" :id="'projectModal' + project.id" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered mx-auto modal-lg mx-3">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ project.name }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <!-- <div class="modal-body">
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <img
                  id="modalimg"
                  :src="project.img"
                  class="img-fluid text-center"
                />
              </div>
            </div>

            <div class="col-md-6">
              <div class="mb-3 text-start">
                <label class="form-label">Project Description :</label>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iure, natus.
                </p>
              </div>

              <div class="mb-3 text-start">
                <label class="form-label">Technologies used :</label>
                <ul>
                  <li>{{ project.category }}</li>
                </ul>
              </div>

              <div class="mb-3 text-start">
                <label class="form-label">Github Link :</label>
                <a :href="project.github"
                  ><i class="fa fa-github-square" aria-hidden="true"></i
                ></a>
              </div>

              <div class="mb-3 text-start">
                <label class="form-label"> Live Link :</label>
                <a :href="project.live"
                  ><i class="fa fa-link" aria-hidden="true"></i
                ></a>
              </div>
            </div>
          </div>
        </div> -->

        <div class="modal-body">
          <div class="row">
            <div class="col-md-12">
              <div class="mb-3">
                <img
                  id="modalimg"
                  :src="project.img"
                  class="img-fluid text-center"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3 text-start">
                  <label class="form-label">Project Description :</label>
                  <p>
                    {{ project.desc }}
                  </p>
                </div>

                <div class="mb-3 text-start">
                  <label class="form-label">Technologies used :</label>
                  <ul>
                    <li>{{ project.category }}</li>
                  </ul>
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3 text-start">
                  <label class="form-label">Github Link :</label>
                  <ul class="list-unstyled">
                    <li>
                      <a :href="project.github" target="_blank"
                        ><i
                          class="btn fa fa-github fs-1"
                          aria-hidden="true"
                        ></i
                      ></a>
                    </li>
                  </ul>
                </div>

                <div class="mb-3 text-start">
                  <label class="form-label"> Live Link :</label>
                  <ul class="list-unstyled">
                    <li>
                      <a :href="project.live" target="_blank"
                        ><i class="btn fa fa-link fs-1" aria-hidden="true"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-warning" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style scoped>
#modalimg {
  width: 450px;
  height: 100%;
  object-fit: cover;
}
.form-label{
    font-size: x-large;
}

p {
    font-size: large;
}

li {
    font-size: large;
}
</style>
