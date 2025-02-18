Ext.define('Ext.locale.pt_br.pivot.Aggregators', {
    override: 'Ext.pivot.Aggregators',

    customText:                 'Custom',
    sumText:                    'Soma',
    avgText:                    'Média',
    countText:                  'Contagem',
    minText:                    'Min',
    maxText:                    'Max',
    groupSumPercentageText:     'Grupo percentual Soma',
    groupCountPercentageText:   'Grupo percentual Contagem',
    varianceText:               'Var',
    variancePText:              'Varp',
    stdDevText:                 'StdDev',
    stdDevPText:                'StdDevp'
});
/**
 * Portuguese (Brasil) translation by Rivaldo C Carvalho.
 *
 */

Ext.define('Ext.locale.pt_BR.pivot.Grid', {
    override: 'Ext.pivot.Grid',

    textTotalTpl:       'Total ({name})',
    textGrandTotalTpl:  'Total Geral'
});
Ext.define('Ext.locale.pt_BR.pivot.plugin.RangeEditor', {
    override: 'Ext.pivot.plugin.RangeEditor',

    textWindowTitle:    'Range editor',
    textFieldValue:     'Valor',
    textFieldEdit:      'Campo',
    textFieldType:      'Tipo',
    textButtonOk:       'Ok',
    textButtonCancel:   'Cancela',

    updaters: [
        ['percentage', 'Percentual'],
        ['increment', 'Incrementar'],
        ['overwrite', 'Sobrescrever'],
        ['uniform', 'Uniformemente']
    ]
});Ext.define('Ext.locale.pt_BR.pivot.plugin.configurator.Column', {
    override: 'Ext.pivot.plugin.configurator.Column',

    sortAscText:                'Classificar A to Z',
    sortDescText:               'Classificar Z to A',
    sortClearText:              'Desabilita Classificação',
    clearFilterText:            'Limpar Filtro de "{0}"',
    labelFiltersText:           'Filtra Rótulo',
    valueFiltersText:           'Filtra Valor',
    equalsText:                 'Igual...',
    doesNotEqualText:           'Não é Igual...',
    beginsWithText:             'Começa com...',
    doesNotBeginWithText:       'Não começa com...',
    endsWithText:               'Termina com...',
    doesNotEndWithText:         'Não termina com...',
    containsText:               'Contém...',
    doesNotContainText:         'Não Contém...',
    greaterThanText:            'Maior que...',
    greaterThanOrEqualToText:   'Maior ou igual a...',
    lessThanText:               'Menor que...',
    lessThanOrEqualToText:      'Menor ou igual a...',
    betweenText:                'Entre...',
    notBetweenText:             'Não entre...',
    top10Text:                  'Top 10...',

    equalsLText:                'igual',
    doesNotEqualLText:          'não é igual',
    beginsWithLText:            'começa com',
    doesNotBeginWithLText:      'não começa com',
    endsWithLText:              'termina com',
    doesNotEndWithLText:        'não termina com',
    containsLText:              'contém',
    doesNotContainLText:        'não contem',
    greaterThanLText:           'é maior que',
    greaterThanOrEqualToLText:  'é maior ou igual a',
    lessThanLText:              'é menor que',
    lessThanOrEqualToLText:     'é menor ou igual a',
    betweenLText:               'está entre',
    notBetweenLText:            'não esta entre',
    top10LText:                 'Top 10...',
    topOrderTopText:            'Para cima',
    topOrderBottomText:         'Para baixo',
    topTypeItemsText:           'Items',
    topTypePercentText:         'Percentual',
    topTypeSumText:             'Soma'

});Ext.define('Ext.locale.pt_BR.pivot.plugin.configurator.Panel', {
    override: 'Ext.pivot.plugin.configurator.Panel',

    panelAllFieldsText:     'Deixe aqui os Campos não utilizados',
    panelTopFieldsText:     'Deixe aqui os Campos das Colunas',
    panelLeftFieldsText:    'Deixe aqui os Campos das Linhas',
    panelAggFieldsText:     'Deixe aqui os Campos de Valores',
    panelAllFieldsTitle:    'Todos os campos',
    panelTopFieldsTitle:    'Colunas',
    panelLeftFieldsTitle:   'Linhas',
    panelAggFieldsTitle:    'Valores',
    addToText:              'Adicionar a {0}',
    moveToText:             'Mover para {0}',
    removeFieldText:        'Remover campo',
    moveUpText:             'Mover para cima',
    moveDownText:           'Mover para baixo',
    moveBeginText:          'Mover para o começo',
    moveEndText:            'Mover para o final',
    formatText:             'Formatar',
    fieldSettingsText:      'Configurações do campo'
});Ext.define('Ext.locale.pt_br.pivot.plugin.configurator.window.FieldSettings', {
    override: 'Ext.pivot.plugin.configurator.window.FieldSettings',

    title:              'Configurações do campo',
    formatText:         'Formatar',
    summarizeByText:    'Summarizar por',
    customNameText:     'Nome personalizado',
    sourceNameText:     'Nome do campo',
    alignText:          'Alinhar',
    alignLeftText:      'Esquerda',
    alignCenterText:    'Centro',
    alignRightText:     'Direita'
});
Ext.define('Ext.locale.pt_br.pivot.plugin.configurator.window.FilterLabel',{
    override:           'Ext.pivot.plugin.configurator.window.FilterLabel',

    titleText:          'Filtra Rótulo ({0})',
    fieldText:          'Mostrar itens para os quais o rótulo é',
    caseSensitiveText:  'Maíúscula e minúscula'
});
Ext.define('Ext.locale.pt_br.pivot.plugin.configurator.window.FilterTop',{
    override:       'Ext.pivot.plugin.configurator.window.FilterTop',

    titleText:      'Filtra top 10 ({0})',
    fieldText:      'Mostrar',
    sortResultsText:'Ordenar os resultados'
});Ext.define('Ext.locale.pt_br.pivot.plugin.configurator.window.FilterValue',{
    override:       'Ext.pivot.plugin.configurator.window.FilterValue',
    titleText:      'Filtra valor ({0})',
    fieldText:      'Mostrar itens para os quais o valor é'
});Ext.define('Ext.locale.pt_br.pivot.plugin.configurator.window.Settings', {
    override: 'Ext.pivot.plugin.configurator.window.Settings',

    title: 'Configurações',
    layoutText: 'Layout',
    outlineLayoutText: 'Contornado',
    compactLayoutText: 'Compacto',
    tabularLayoutText: 'Tabular',
    firstPositionText: 'Primeiro',
    hidePositionText: 'Esconder',
    lastPositionText: 'Último',
    rowSubTotalPositionText: 'Posição da linha subtotal',
    columnSubTotalPositionText: 'Posição da coluna subtotal',
    rowTotalPositionText: 'Posição da linha total',
    columnTotalPositionText: 'Posição da coluna total',
    showZeroAsBlankText: 'Mostrar zero como nulo',
    yesText: 'Sim',
    noText: 'Não',
});
Ext.define('Ext.locale.pt_br.pivot.Aggregators', {
    override: 'Ext.pivot.Aggregators',

    customText:                 'Custom',
    sumText:                    'Soma',
    avgText:                    'Média',
    countText:                  'Contagem',
    minText:                    'Min',
    maxText:                    'Max',
    groupSumPercentageText:     'Grupo percentual Soma',
    groupCountPercentageText:   'Grupo percentual Contagem',
    varianceText:               'Var',
    variancePText:              'Varp',
    stdDevText:                 'StdDev',
    stdDevPText:                'StdDevp'
});
/**
 * Portuguese (Brasil) translation by Rivaldo C Carvalho.
 *
 */

Ext.define('Ext.locale.pt_BR.pivot.Grid', {
    override: 'Ext.pivot.Grid',

    textTotalTpl:       'Total ({name})',
    textGrandTotalTpl:  'Total Geral'
});
Ext.define('Ext.locale.pt_BR.pivot.plugin.RangeEditor', {
    override: 'Ext.pivot.plugin.RangeEditor',

    textWindowTitle:    'Range editor',
    textFieldValue:     'Valor',
    textFieldEdit:      'Campo',
    textFieldType:      'Tipo',
    textButtonOk:       'Ok',
    textButtonCancel:   'Cancela',

    updaters: [
        ['percentage', 'Percentual'],
        ['increment', 'Incrementar'],
        ['overwrite', 'Sobrescrever'],
        ['uniform', 'Uniformemente']
    ]
});Ext.define('Ext.locale.pt_BR.pivot.plugin.configurator.Column', {
    override: 'Ext.pivot.plugin.configurator.Column',

    sortAscText:                'Classificar de A a Z',
    sortDescText:               'Classificar de Z a A',
    sortClearText:              'Desabilitar Classificação',
    clearFilterText:            'Limpar Filtro de "{0}"',
    labelFiltersText:           'Filtrar Rótulo',
    valueFiltersText:           'Filtrar Valor',
    equalsText:                 'Igual...',
    doesNotEqualText:           'Não é Igual...',
    beginsWithText:             'Começa com...',
    doesNotBeginWithText:       'Não começa com...',
    endsWithText:               'Termina com...',
    doesNotEndWithText:         'Não termina com...',
    containsText:               'Contém...',
    doesNotContainText:         'Não Contém...',
    greaterThanText:            'Maior que...',
    greaterThanOrEqualToText:   'Maior ou igual a...',
    lessThanText:               'Menor que...',
    lessThanOrEqualToText:      'Menor ou igual a...',
    betweenText:                'Entre...',
    notBetweenText:             'Não entre...',
    top10Text:                  'Top 10...',

    equalsLText:                'igual',
    doesNotEqualLText:          'não é igual',
    beginsWithLText:            'começa com',
    doesNotBeginWithLText:      'não começa com',
    endsWithLText:              'termina com',
    doesNotEndWithLText:        'não termina com',
    containsLText:              'contém',
    doesNotContainLText:        'não contem',
    greaterThanLText:           'é maior que',
    greaterThanOrEqualToLText:  'é maior ou igual a',
    lessThanLText:              'é menor que',
    lessThanOrEqualToLText:     'é menor ou igual a',
    betweenLText:               'está entre',
    notBetweenLText:            'não esta entre',
    top10LText:                 'Top 10...',
    topOrderTopText:            'Para cima',
    topOrderBottomText:         'Para baixo',
    topTypeItemsText:           'Items',
    topTypePercentText:         'Percentual',
    topTypeSumText:             'Soma'

});Ext.define('Ext.locale.pt_BR.pivot.plugin.configurator.Panel', {
    override: 'Ext.pivot.plugin.configurator.Panel',

    panelAllFieldsText:     'Deixe aqui os Campos não utilizados',
    panelTopFieldsText:     'Deixe aqui os Campos das Colunas',
    panelLeftFieldsText:    'Deixe aqui os Campos das Linhas',
    panelAggFieldsText:     'Deixe aqui os Campos de Valores',
    panelAllFieldsTitle:    'Todos os campos',
    panelTopFieldsTitle:    'Colunas',
    panelLeftFieldsTitle:   'Linhas',
    panelAggFieldsTitle:    'Valores',
    addToText:              'Adicionar a {0}',
    moveToText:             'Mover para {0}',
    removeFieldText:        'Remover campo',
    moveUpText:             'Mover para cima',
    moveDownText:           'Mover para baixo',
    moveBeginText:          'Mover para o começo',
    moveEndText:            'Mover para o final',
    formatText:             'Formatar',
    fieldSettingsText:      'Configurações do campo'
});Ext.define('Ext.locale.pt_br.pivot.plugin.configurator.window.FieldSettings', {
    override: 'Ext.pivot.plugin.configurator.window.FieldSettings',

    title:              'Configurações do campo',
    formatText:         'Formatar',
    summarizeByText:    'Summarizar por',
    customNameText:     'Nome personalizado',
    sourceNameText:     'Nome do campo',
    alignText:          'Alinhar',
    alignLeftText:      'Esquerda',
    alignCenterText:    'Centro',
    alignRightText:     'Direita'
});
Ext.define('Ext.locale.pt_br.pivot.plugin.configurator.window.FilterLabel',{
    override:           'Ext.pivot.plugin.configurator.window.FilterLabel',

    titleText:          'Filtra Rótulo ({0})',
    fieldText:          'Mostrar itens para os quais o rótulo é',
    caseSensitiveText:  'Maíúscula e minúscula'
});
Ext.define('Ext.locale.pt_br.pivot.plugin.configurator.window.FilterTop',{
    override:       'Ext.pivot.plugin.configurator.window.FilterTop',

    titleText:      'Filtra top 10 ({0})',
    fieldText:      'Mostrar',
    sortResultsText:'Ordenar os resultados'
});Ext.define('Ext.locale.pt_br.pivot.plugin.configurator.window.FilterValue',{
    override:       'Ext.pivot.plugin.configurator.window.FilterValue',
    titleText:      'Filtra valor ({0})',
    fieldText:      'Mostrar itens para os quais o valor é'
});Ext.define('Ext.locale.pt_br.pivot.plugin.configurator.window.Settings', {
    override: 'Ext.pivot.plugin.configurator.window.Settings',

    title: 'Configurações',
    layoutText: 'Layout',
    outlineLayoutText: 'Contornado',
    compactLayoutText: 'Compacto',
    tabularLayoutText: 'Tabular',
    firstPositionText: 'Primeiro',
    hidePositionText: 'Esconder',
    lastPositionText: 'Último',
    rowSubTotalPositionText: 'Posição da linha subtotal',
    columnSubTotalPositionText: 'Posição da coluna subtotal',
    rowTotalPositionText: 'Posição da linha total',
    columnTotalPositionText: 'Posição da coluna total',
    showZeroAsBlankText: 'Mostrar zero como nulo',
    yesText: 'Sim',
    noText: 'Não',
});
