Feature: Validar si el CONTRATO existe en la pagina de GINNI

  @ValidarUsuarioPageGinni
  Scenario Outline: Usuario valida si el contrato requerido existe en la pagina de GINNI
    Given Usuario se encuentra en la pantalla de Login de GINNI
    And Usuario ingresa su usuario y contraseña <segunIdCasoDePrueba>
    And Usuario da click en el boton "Ingresar al sitio"
    And Usuario ingresa el contrato <segunIdCasoDePrueba> a buscar en el textbox
    Then Usuario valida que el contrato este asociado a un cliente existente


    Examples:
      | segunIdCasoDePrueba |
      | 2           |
      | 3           |
