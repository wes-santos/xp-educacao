from abc import ABC, abstractmethod

class Button(ABC):
    @abstractmethod
    def render(self):
        pass

class WindowsButton(Button):
    def render(self):
        return "Renderizando botão do Windows"

class WebButton(Button):
    def render(self):
        return "Renderizando botão da Web"

class Dialog(ABC):
    @abstractmethod
    def create_button(self) -> Button:
        pass

    def render_button(self):
        button = self.create_button()
        return button.render()

class WindowsDialog(Dialog):
    def create_button(self) -> Button:
        return WindowsButton()

class WebDialog(Dialog):
    def create_button(self) -> Button:
        return WebButton()

def client_code(dialog: Dialog):
    print(dialog.render_button())

windows_dialog = WindowsDialog()
web_dialog = WebDialog()

client_code(windows_dialog)
client_code(web_dialog)

# Neste exemplo, o método create_button é o nosso Factory Method. As subsclasses WindowsDialog e WebDialog
# fornecem implementações específicas para criar botões do windows e da Web, respectivamente.
# O cliente pode usar essas subclasses sem se preocupar com os detalhes de implementação específicos.

