
Feature:  Validar Restablecer Contraseña si el usuario no es valido devolviendo el PopUp de envio de correo.
#ok
  @ValidarRestablecerContrasenaLogin
  Scenario Outline: Usuario selecciona restablecer contraseña en el Login
    Given Usuario selecciona "Restablecer contraseña"
    When Usuario visualiza el POPUP de restablecer contraseña y ingresa los datos <segunIdCasoDePrueba>
    And Usuario presiona el boton "enviar" para restablecer contraseña
    Then Usuario valida el mensaje "Si el usuario es válido se te enviará un correo."

    Examples:
      | segunIdCasoDePrueba |
      |      1     |

